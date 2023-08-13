import { Module } from '@nestjs/common';
import { TodoController } from './infrastructure/controllers/todo.controller';
import { CreateTodoUseCase } from './usecases/create-todo.usecase';

@Module({
  controllers: [TodoController],
  providers: [CreateTodoUseCase],
})
export class TodoModule {}
