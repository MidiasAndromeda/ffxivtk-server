import { prop, Typegoose, ModelType, InstanceType } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class User extends Typegoose {
    @prop({ required: true })
    googleId?: string;
    @prop()
    username?: string;
    @prop({ unique: true })
    email: string;
    @prop({ default: Date.now() })
    createdAt: Date;
    @prop({ default: Date.now() })
    modifiedAt: Date;
    @prop()
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
}

export const Users = new User().getModelForClass(User);
