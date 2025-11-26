import { Controller } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  @Post()
  create() {
    return 'This action adds a new article';
  }
}
