import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigDatabase } from './database/config-database';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigDatabase as TypeOrmModuleOptions),
    UsersModule,
    CategoriesModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
