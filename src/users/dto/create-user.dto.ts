/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNotEmpty,
  Length,
  Min,
} from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  @Length(4, 32)
  login: string;

  @IsNotEmpty()
  @Length(10, 20)
  password: string;
  @IsArray()
  @ArrayNotEmpty()
  roles: ('admin' | 'user')[];
  @IsNotEmpty()
  gender: 'male' | 'female';
  @Min(1)
  age: number;
}
