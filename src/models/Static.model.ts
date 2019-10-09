import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

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
    @prop()
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
}

export const Statics = new Static().getModelForClass(Static);
