import { database, dbPort, host, password, username } from 'src/config';
import { Question } from 'src/entities/Questions.entities';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host,
        port: dbPort,
        username,
        password,
        database,
        entities: [Question],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
