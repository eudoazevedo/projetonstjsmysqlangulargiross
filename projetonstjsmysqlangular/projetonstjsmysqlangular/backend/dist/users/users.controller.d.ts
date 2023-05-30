import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { UserDto } from './user.dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    create(user: UserDto): Promise<User>;
    update(id: string, data: UserDto): Promise<User | null>;
    delete(id: string): Promise<User | null>;
}
