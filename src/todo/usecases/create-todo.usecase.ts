import { Inject, Injectable } from '@nestjs/common';
import { ITodoRepository, TODO_REPO_NAME } from '../domain/repository/todo.repository';
import { TodoModel } from '../domain/models/todo.model';

@Injectable()
export class CreateTodoUseCase {

    constructor(
        @Inject(TODO_REPO_NAME)
        private readonly todoRepo: ITodoRepository
    ) { }

    createTodo(todo:TodoModel) {
        return this.todoRepo.createTodo(todo);
    }

}
