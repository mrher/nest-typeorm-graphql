import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'gfhfnhegth51',
        database: 'nest_test_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: ['src/migrations/*{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
