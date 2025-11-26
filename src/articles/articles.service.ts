import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/shared/models/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: typeof ArticleEntity,
  ) {}

  async create(body: CreateArticleDto) {
    const article = new ArticleEntity();
    article.title = body.title;
    article.text = body.text;
    article.description = body.description;
    article.tags = body.tags;
  }
  getList() {
    return 'This action returns all articles';
  }
  getById(id: number) {
    return `This action returns article #${id}`;
  }
  updateById(id: number) {
    return `This action updates article #${id}`;
  }
  deleteById(id: number) {
    return `This action deletes article #${id}`;
  }
}
