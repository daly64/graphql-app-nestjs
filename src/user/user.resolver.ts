import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { PubSub } from 'graphql-subscriptions';


const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    pubSub.publish('users', { users: this.userService.findAll() });
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    pubSub.publish('users', { users: this.userService.findAll() });
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    pubSub.publish('users', { users: this.userService.findAll() });
    return this.userService.remove(id);
  }

  @Subscription(() => [User])
  users() {
    setTimeout(() => {
      pubSub.publish('users', { users: this.userService.findAll() });
    }, 1000);
    return pubSub.asyncIterator('users');
  }
}
