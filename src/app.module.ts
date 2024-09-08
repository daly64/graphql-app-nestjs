import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
    subscriptions: {
      'subscriptions-transport-ws': true,

    },
    
  }), UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
