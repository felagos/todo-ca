import { Repository } from "typeorm";
import { TodoModel } from "../../domain/models/todo.model";
import { ITodoRepository } from "../../domain/repository/todo.repository";
import { TodoEntity } from "../entities/todo.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoMapper } from "../mappers/todo.mapper";
import { TodoRepeatedException } from "../../domain/exceptions/todo-repeated.exception";

@Injectable()
export class TodoRepository implements ITodoRepository {

    private readonly todos: TodoEntity[] = [];

    constructor(
        private readonly mapper: TodoMapper,
      ) {}

    async createTodo(todo: TodoModel): Promise<TodoModel> {
        const todoRepeated = this.todos.find(
            el => el.name.toLowerCase() === todo.name.toLocaleLowerCase()
        );

        if(todoRepeated) 
            throw new TodoRepeatedException(`Todo ${todoRepeated.name} is already repeated`);

        const entity = this.mapper.domainToEntity(todo);

        entity.id = Date.now();
        entity.status = 'created';
        
        this.todos.push(entity)

        return this.mapper.entityToModelDomain(entity);
    }
    
}