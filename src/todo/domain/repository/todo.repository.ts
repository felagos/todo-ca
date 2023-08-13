import { TodoModel } from '../models/todo.model';

export interface TodoRepository {
  createTodo(todo: TodoModel): Promise<TodoModel>;
}
