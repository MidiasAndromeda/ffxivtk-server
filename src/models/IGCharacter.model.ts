import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class IGCharacter extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop({ required: true })
    avatar: string;
    @prop({ required: true })
    portrait: string;
    @prop({ required: true, unique: true })
    apiId: string;
    @prop({ default: Date.now() })
    createdAt: Date;
    @prop({ default: Date.now() })
    modifiedAt: Date;
}

export const IGCharacters = new IGCharacter().getModelForClass(IGCharacter);
