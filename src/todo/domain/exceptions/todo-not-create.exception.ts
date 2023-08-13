export class TodoNotCreatedException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, TodoNotCreatedException.prototype);
  }
}
