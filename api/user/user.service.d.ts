import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserService {
    users: {
        id: number;
        name: string;
    }[];
    create(createUserInput: CreateUserInput): number;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
    };
    update(id: number, updateUserInput: UpdateUserInput): {
        id: number;
        name: string;
    }[];
    remove(id: number): {
        id: number;
        name: string;
    }[];
}
