import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}
  
  @Post()
  create(@Body() body: CreateArticleDto) {
    return this.service.create(body);
  }

  @Get()
  getList() {
    return this.service.getList();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: number, @Body() body: UpdateArticleDto) {
    return this.service.updateById(id, body);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
}
