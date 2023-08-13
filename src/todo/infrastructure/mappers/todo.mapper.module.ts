import { Module } from '@nestjs/common';
import { TodoMapper } from './todo.mapper';

@Module({
    providers: [TodoMapper],
    exports: [TodoMapper],
})
export class MapperModule {}
