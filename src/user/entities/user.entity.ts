import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id of user' })
  id: number;
  @Field(() => String, { description: 'name' })
  name: string;
}
