import { IsEmail, MaxLength, IsString } from "class-validator";

export class SingInDto {
  @IsEmail()
  @MaxLength(255)
  email: string;
  @IsString()
  password: string;
}
