import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [TodoModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
