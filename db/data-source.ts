import {DataSourceOptions} from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'serii1981',
      database: 'nestjs_blog',
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/migrations/*.js'],
      synchronize: false,
      logging: true,
}
