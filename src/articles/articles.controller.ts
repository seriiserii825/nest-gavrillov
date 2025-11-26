import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {ArticlesService} from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}
  
  @Post()
  create() {
    return this.service.create();
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
  updateById(@Param('id') id: number) {
    return this.service.updateById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
}
