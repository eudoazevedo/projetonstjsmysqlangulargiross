import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { UserDto } from './user.dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    if(id != Number(id)){
      throw new BadRequestException('User not found');
    }
    try {
     const user = await this.prisma.user.findUnique({
        where: { id },
      });
      if(!user){
        throw new BadRequestException('User not found');
      }
      return { ...user }
    } catch (error) {
      throw new BadRequestException('User not found');
    }

    
  }
  async create(data: UserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (user) {
      throw new BadRequestException('User already exists');
    }
    try {
      await this.prisma.user.create({
        data,
      });
    } catch (error) {
      throw new BadRequestException('User not found');
    }

    
    return { ...user, ...data };
    
  }

  async update(id: number, data: UserDto): Promise<User | null> {
    if(id != Number(id)){
      throw new BadRequestException('User not found');
    }
    const email = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (email) {
      throw new BadRequestException('Email already exists');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    try {
      await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new BadRequestException('User not found');
    }
    
    return { ...user, ...data }; 
    
  }

  async delete(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    try {
      await this.prisma.user.delete({
        where: { id },
      });

    
    }
    catch (error) {
      throw new BadRequestException('User not found');
    }
    return { ...user}
  }
}