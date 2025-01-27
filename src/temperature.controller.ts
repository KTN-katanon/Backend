/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TemperatureSevice } from './temperature.sevice';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureSevice) {}
  @Get('convert')
  convert(@Query('celsius') celsius: string) {
    return this.temperatureService.convert(parseFloat(celsius));
  }

  @Post('convert')
  convertByPost(@Body('celsius') celsius: number) {
    return this.temperatureService.convert(celsius);
  }

  @Get('convert/:celsius')
  convertParam(@Param('celsius') celsius: string) {
    return this.temperatureService.convert(parseFloat(celsius));
  }
}
