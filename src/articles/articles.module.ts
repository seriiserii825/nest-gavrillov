import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/shared/models/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
