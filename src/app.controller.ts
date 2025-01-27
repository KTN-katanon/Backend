import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
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

  @Get('test-query')
  testQuery(
    @Req() req,
    @Query('celsius') celsius: number,
    @Query('type') type: string,
  ) {
    return { celsius: celsius, type: type };
  }

  @Get('test-params/:celsius')
  testParam(@Req() req, @Param('celsius') celsius: number) {
    return { celsius };
  }

  @Post('test-body')
  testBody(@Req() req, @Body() body, @Body('celsius') celsius: number) {
    return celsius;
  }

  @Get('convert')
  convert(@Query('celsius') celsius: string) {
    return this.appService.convert(parseFloat(celsius));
  }

  @Post('convert')
  convertByPost(@Body('celsius') celsius: number) {
    return this.appService.convert(celsius);
  }

  @Get('convert/:celsius')
  convertParam(@Param('celsius') celsius: string) {
    return this.appService.convert(parseFloat(celsius));
  }
}
