import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class User extends Typegoose {
    @prop()
    username?: string;
    @prop()
    email?: string;
    @prop()
    googleId?: string;
    @prop()
    createdAt?: date;
    @prop()
    modifedAt?: string;
}
