import { Module } from '@nestjs/common';
import { TodoController } from './infrastructure/controllers/todo.controller';
import { CreateTodoUseCase } from './usecases/create-todo.usecase';
import { TodoRepositoryModule } from './infrastructure/repository/todo.repository.module';
import { MapperModule } from './infrastructure/mappers/todo.mapper.module';

@Module({
  controllers: [TodoController],
  providers: [CreateTodoUseCase],
  imports: [TodoRepositoryModule, MapperModule],
})
export class TodoModule {}
