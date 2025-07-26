import { Sequelize } from 'sequelize-typescript';
import config from './config/config';
import { Dialect } from 'sequelize/types/sequelize';
import { ProjectModel } from './models/project.model';
import { Task } from './models/task.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password,
        {
          dialect: config.development.dialect as Dialect,
          host: config.development.host,
          port: config.development.port,
        },
      );
      sequelize.addModels([ProjectModel, Task]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
