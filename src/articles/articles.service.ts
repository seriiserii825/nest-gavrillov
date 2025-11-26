import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  create() {
    return 'This action adds a new article';
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
