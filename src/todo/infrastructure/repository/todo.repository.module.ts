import { Module } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { TODO_REPO_NAME } from '../../domain/repository/todo.repository';
import { TodoMapper } from '../mappers/todo.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from '../entities/todo.entity';

const TODO_PROVIDER = {
  useClass: TodoRepository,
  provide: TODO_REPO_NAME,
};

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TODO_PROVIDER, TodoMapper],
  exports: [TODO_PROVIDER],
})
export class TodoRepositoryModule {}
