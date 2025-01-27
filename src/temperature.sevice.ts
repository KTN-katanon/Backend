/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureSevice {
  convert(celsius: number) {
    return {
      celsius: celsius,
      fahrenheit: (celsius * 9.0) / 5 + 32,
    };
  }
}
