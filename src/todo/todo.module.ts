import { Module } from '@nestjs/common';
import { TodoController } from './infrastructure/controllers/todo.controller';
import { CreateTodoUseCase } from './usecases/create-todo.usecase';
import { TodoRepositoryModule } from './infrastructure/repository/todo.repository.module';
import { TodoMapper } from './infrastructure/mappers/todo.mapper';

@Module({
  controllers: [TodoController],
  providers: [CreateTodoUseCase, TodoMapper],
  imports: [TodoRepositoryModule],
})
export class TodoModule {}
