import { Sequelize } from 'sequelize-typescript';
import config from './config/config';
import { Dialect } from 'sequelize/types/sequelize';

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
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
