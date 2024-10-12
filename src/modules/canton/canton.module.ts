import { Module } from '@nestjs/common';
import { CantonService } from './canton.service';
import { CantonController } from './canton.controller';

@Module({
  controllers: [CantonController],
  providers: [CantonService],
})
export class CantonModule {}
