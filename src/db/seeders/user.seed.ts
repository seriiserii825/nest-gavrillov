import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {UserEntity} from 'src/shared/models/user.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repo = dataSource.getRepository(UserEntity);

    console.log('UserSeeder RUNNING...');
    await repo.insert([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
      },
    ]);
  }
}
