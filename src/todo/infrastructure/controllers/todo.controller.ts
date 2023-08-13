import {
  Body,
  ConflictException,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { CreateTodoUseCase } from '../../usecases/create-todo.usecase';
import { TodoMapper } from '../mappers/todo.mapper';
import { TodoRepeatedException } from '../../domain/exceptions/todo-repeated.exception';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly createTodoUC: CreateTodoUseCase,
    private readonly mapper: TodoMapper,
  ) {}

  @Post()
  public createTodo(@Body() body: CreateTodoDto) {
    try {
      const domain = this.mapper.dtoToDomain(body);
      return this.createTodoUC.createTodo(domain);
    } catch (error) {
      if (error instanceof TodoRepeatedException)
        throw new ConflictException(error.message);
      throw new InternalServerErrorException();
    }
  }
}
