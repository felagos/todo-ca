import { Injectable } from "@nestjs/common";
import { TodoModel } from "../../domain/models/todo.model";
import { TodoEntity } from "../entities/todo.entity";
import { Builder } from "builder-pattern";
import { TodoStatus } from "../../domain/models/todo-status.model";
import { CreateTodoDto } from "../dtos/create-todo.dto";

@Injectable()
export class TodoMapper {

    domainToEntity(todo: TodoModel) {
        return Builder<TodoEntity>()
            .name(todo.name)
            .status('created')
            .created(getCurrentDate())
            .build();
    }

    entityToModelDomain(entity: TodoEntity) {
        return Builder<TodoModel>()
            .id(entity.id)
            .name(entity.name)
            .status(TodoStatus[entity.status.toUpperCase()])
            .build();
    }

    dtoToDomain(dto: CreateTodoDto) {
        return Builder<TodoModel>()
            .name(dto.name)
            .build();
    }

}