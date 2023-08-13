import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'user',
      database: 'todo',
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
  exports: [],
})
export class TypeOrmConfigModule {}
