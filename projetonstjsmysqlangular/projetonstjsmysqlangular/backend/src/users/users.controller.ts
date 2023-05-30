// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { UserDto } from './user.dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: UserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UserDto): Promise<User | null> {
    return this.usersService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<User | null> {
    return this.usersService.delete(+id);
  }
}
