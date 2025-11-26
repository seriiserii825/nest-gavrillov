import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/shared/models/article.entity';
import {UserEntity} from 'src/shared/models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
