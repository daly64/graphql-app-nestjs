import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    // autoSchemaFile: 'src/schema.gql',
    autoSchemaFile: true,
    subscriptions: {
      'subscriptions-transport-ws': true,

    },
    
  }), UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
