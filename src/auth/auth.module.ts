import { Module, Scope } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { configAuth } from 'src/auth/config.auth'

@Module({
  controllers: [AuthController],
  providers: [{
    provide: AuthService,
    useClass: AuthService,
    scope: Scope.REQUEST
  }],
  imports:[UsersModule, JwtModule.register(configAuth as JwtModuleOptions), ConfigModule]
})
export class AuthModule {}