import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [
    UsersResolver,
    UserService
  ],

})
export class UserModule { }
