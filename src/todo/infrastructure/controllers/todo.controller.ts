import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { CreateTodoUseCase } from '../../usecases/create-todo.usecase';

@Controller('todo')
export class TodoController {
  constructor(private readonly createTodoUC: CreateTodoUseCase) {}

  @Post()
  public createTodo(@Body() body: CreateTodoDto) {
    return body;
  }
}
