import { prop, Typegoose, arrayProp } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';
import { IGCharacters } from './IGCharacter.model';
import { Statics } from './Static.model';

class User extends Typegoose {
    @prop({ required: true })
    googleId: string;
    @prop({ required: true })
    username?: string;
    @prop()
    password?: string;
    @prop()
    email?: string;
    @prop()
    fflogsURL?: string;
    @prop()
    discord?: string;
    @prop({ default: 1 })
    authority: number;
    @prop({ default: true })
    displayAdvancedProfile: boolean;

    @prop({ default: Date.now() })
    createdAt: Date;
    @prop({ default: Date.now() })
    modifiedAt: Date;

    @arrayProp({ items: Statics })
    statics: [{
        type: mongoose.Types.ObjectId,
        ref: 'Static'
    }]
    @arrayProp({ items: IGCharacters })
    igCharacters: [{
        type: mongoose.Types.ObjectId,
        ref: 'IGCharacter'
    }]
    @prop()
    playType: {
        type: mongoose.Types.ObjectId,
        ref: 'PlayType'
    }
    @prop()
    job: {
        type: mongoose.Types.ObjectId,
        ref: 'Job'
    }
}

export const Users = new User().getModelForClass(User);
