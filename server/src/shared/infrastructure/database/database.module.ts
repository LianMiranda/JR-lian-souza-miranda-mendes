import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectModel } from './models/project.model';
import config from './config/config';
import { Dialect } from 'sequelize';
import { Task } from './models/task.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: config.development.dialect as Dialect,
      host: config.development.host,
      port: config.development.port,
      username: config.development.username,
      password: config.development.password,
      database: config.development.database,
      models: [ProjectModel, Task],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
