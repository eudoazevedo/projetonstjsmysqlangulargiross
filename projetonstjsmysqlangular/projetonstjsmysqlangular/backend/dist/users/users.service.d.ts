import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { UserDto } from './user.dto/user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    create(data: UserDto): Promise<User>;
    update(id: number, data: UserDto): Promise<User | null>;
    delete(id: number): Promise<User | null>;
}
