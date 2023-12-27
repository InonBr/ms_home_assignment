import { database, dbPort, host, password, username } from 'src/config';
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
        entities: [],
        synchronize: true,
      });

      await dataSource.initialize();
      console.log(`🔵  DB is connected `);
    },
  },
];
