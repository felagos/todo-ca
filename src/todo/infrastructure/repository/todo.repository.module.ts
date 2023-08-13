import { Module } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { TODO_REPO_NAME } from '../../domain/repository/todo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoMapper } from '../mappers/todo.mapper';
import { MapperModule } from '../mappers/todo.mapper.module';

const TODO_PROVIDER = {
  useClass: TodoRepository,
  provide: TODO_REPO_NAME
}

@Module({
  imports: [MapperModule],
  providers: [TODO_PROVIDER],
  exports: [TODO_PROVIDER],
})
export class TodoRepositoryModule { }
