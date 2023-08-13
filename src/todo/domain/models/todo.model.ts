import { TodoStatus } from './todo-status.model';

export class TodoModel {
  id: number;
  name: string;
  status: TodoStatus;
  created: Date;
}
