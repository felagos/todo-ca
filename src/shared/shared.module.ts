import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './config/typeorm/typeorm..config.module';

@Module({
  imports: [TypeOrmConfigModule],
})
export class SharedModule {}
