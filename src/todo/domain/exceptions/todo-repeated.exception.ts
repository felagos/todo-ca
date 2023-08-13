export class TodoRepeatedException extends Error {

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, TodoRepeatedException.prototype);
      }

}