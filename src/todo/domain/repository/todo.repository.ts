import { TodoModel } from '../models/todo.model';

export const TODO_REPO_NAME = 'TODO_REPOSITORY';

export interface ITodoRepository {
  createTodo(todo: TodoModel): Promise<TodoModel>;
}
