import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';


@Injectable()
export class UserService {
   users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Smith',
     },
  ]
  create(createUserInput: CreateUserInput) {
    return this.users.push({ id: this.users.length + 1, name: createUserInput.name });
  }
    

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.users.map(user => user.id === id ? { ...user, ...updateUserInput } : user);
  }

  remove(id: number) {
    return this.users.filter(user => user.id !== id);
  }
}
