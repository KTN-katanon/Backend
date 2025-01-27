import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureModule } from './temperature.module';

@Module({
  imports: [TemperatureModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
