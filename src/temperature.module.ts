/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureSevice } from './temperature.sevice';

@Module({
    imports: [],
    exports: [],
    controllers: [TemperatureController],
    providers: [TemperatureSevice],
})
export class TemperatureModule {}
