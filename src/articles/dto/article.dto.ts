import {ArticleEntity} from "src/shared/models/article.entity";

export class ArticleDto {
  id: number;
  title: string;
  text: string;
  description: string;
  tags: string;
  user_id: number;

  constructor(entity: ArticleEntity) {
    this.id = entity.id;
    this.title = entity.title;
    this.text = entity.text;
    this.description = entity.description;
    this.tags = entity.tags;
  }
}
