import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class employeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  phone: number;

  @IsString()
  password: string;

  @IsBoolean()
  @IsOptional()
  is_deleted: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;
}
