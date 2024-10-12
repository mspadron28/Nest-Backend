import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { ProvinceModule } from './modules/province/province.module';
import { CantonModule } from './modules/canton/canton.module';
import { ParishesModule } from './modules/parishes/parishes.module';

@Module({
  imports: [ProvinceModule, PrismaModule, CantonModule, ParishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
