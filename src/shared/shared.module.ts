import { Module } from '@nestjs/common';
import { TypeormModule } from './config/typeorm/typeorm.module';

@Module({
  imports: [],
})
export class SharedModule {}
