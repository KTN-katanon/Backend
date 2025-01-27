import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDefault(): string {
    return 'Default';
  }

  @Get('hello')
  getHello(): string {
    return '<hmtl><body><h1>Hello Buu</h1></body></hmtl>';
  }

  @Delete('world')
  getWorld(): string {
    return '<hmtl><body><h1>Buu World</h1></body></hmtl>';
  }

  @Get('convert')
  convert() {
    return 'convert';
  }
}
