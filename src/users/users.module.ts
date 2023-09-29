import { Module, Scope } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [{
    provide: UsersService,
    useClass: UsersService,
    scope: Scope.REQUEST
  }],
  exports:[UsersService]
})
export class UsersModule {}