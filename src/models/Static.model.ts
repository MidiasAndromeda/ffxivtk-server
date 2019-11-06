import { prop, Typegoose, arrayProp } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';
import { Users } from './User.model';

class Static extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop()
    icon?: string;
    @prop()
    fflogsURL?: string;
    @prop()
    websiteURL?: string;
    @prop({ default: Date.now() })
    createdAt: Date;
    @prop({ default: Date.now() })
    modifiedAt: Date;
    @arrayProp({ items: mongoose.Types.ObjectId })
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
    @prop()
    playType: {
        type: mongoose.Types.ObjectId,
        ref: 'PlayType'
    }
}

export const Statics = new Static().getModelForClass(Static);
