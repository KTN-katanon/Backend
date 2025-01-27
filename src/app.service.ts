import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  convert(celsius: number) {
    return {
      celsius: celsius,
      fahrenheit: (celsius * 9.0) / 5 + 32,
    };
  }
}
