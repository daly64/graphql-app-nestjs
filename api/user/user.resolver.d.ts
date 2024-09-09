import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): number;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
    };
    updateUser(updateUserInput: UpdateUserInput): {
        id: number;
        name: string;
    }[];
    removeUser(id: number): {
        id: number;
        name: string;
    }[];
    users(): AsyncIterator<unknown, any, undefined>;
}
