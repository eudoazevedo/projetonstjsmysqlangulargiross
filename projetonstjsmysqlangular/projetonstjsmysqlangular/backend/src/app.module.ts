import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [ UsersService, PrismaService],
})
export class AppModule {}
