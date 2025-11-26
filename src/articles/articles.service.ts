import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/shared/models/article.entity';
import { UserEntity } from 'src/shared/models/user.entity';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: typeof ArticleEntity,
    @InjectRepository(UserEntity)
    private readonly userRepository: typeof UserEntity,
  ) {}

  async create(body: CreateArticleDto) {
    const user = await this.userRepository
      .findOne({ where: { id: 1 } })
      .catch((err) => {
        console.error('Error fetching user:', err);
        throw err;
      });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const article = new ArticleEntity();
    article.title = body.title;
    article.text = body.text;
    article.description = body.description;
    article.tags = body.tags;
    article.author = user;

    const res = await article.save().catch((err) => {
      console.error('Error saving article:', err);
      throw new NotFoundException('Error saving article');
    });

    return new ArticleDto(res);
  }
  async getList() {
    const articles = await this.articleRepository.find().catch((err) => {
      console.error('Error fetching articles:', err);
      throw new NotFoundException('Error fetching articles');
    });
    if (!articles) {
      throw new NotFoundException('No articles found');
    }
    return articles.map((article) => new ArticleDto(article));
  }
  async getById(id: number) {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return new ArticleDto(article);
  }
  updateById(id: number) {
    return `This action updates article #${id}`;
  }
  deleteById(id: number) {
    return `This action deletes article #${id}`;
  }
}
