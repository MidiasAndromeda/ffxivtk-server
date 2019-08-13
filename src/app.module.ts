import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb+srv://midias:ace123456789@ffxivtk-cluster-hkeql.mongodb.net/ffxivtk?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { } 