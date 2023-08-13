import { DataSource, QueryRunner, Repository } from 'typeorm';
import { TodoModel } from '../../domain/models/todo.model';
import { ITodoRepository } from '../../domain/repository/todo.repository';
import { TodoEntity } from '../entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoMapper } from '../mappers/todo.mapper';
import {
  TodoRepeatedException,
  TodoNotCreatedException,
} from '../../domain/exceptions';

@Injectable()
export class TodoRepository implements ITodoRepository {
  private queryRunner: QueryRunner;

  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
    private dataSource: DataSource,
    private readonly mapper: TodoMapper,
  ) {
    this.queryRunner = this.dataSource.createQueryRunner();
  }

  async createTodo(todo: TodoModel): Promise<TodoModel> {
    try {
      await this.queryRunner.startTransaction();

      const todoRepeated = await this.todoRepository.findOne({
        where: {
          name: todo.name,
        },
      });

      if (todoRepeated)
        throw new TodoRepeatedException(
          `Todo ${todoRepeated.name} is already repeated`,
        );

      const entity = this.mapper.domainToEntity(todo);
      const todoCreated = await this.todoRepository.save<TodoEntity>([entity]);

      const todoDomainCreated = this.mapper.entityToModelDomain(todoCreated[0]);

      await this.queryRunner.commitTransaction();

      return todoDomainCreated;
    } catch (error) {
      console.log('error', error);
      await this.queryRunner.rollbackTransaction();

      throw new TodoNotCreatedException(
        `Error while creating new todo ${todo.name}`,
      );
    } finally {
      await this.queryRunner.release();
    }
  }
}
