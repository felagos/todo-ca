import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'user',
        database: 'todo',
        entities: ["dist/**/*.entity{.ts,.js}", "src/**/*.entity{.ts,.js}"],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class TypeormModule { }
