import { prop, Typegoose, arrayProp } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';
import { IGCharacters } from './IGCharacter.model';

class Server extends Typegoose {
    @prop({ required: true })
    name: string;
    @arrayProp({ items: IGCharacters })
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'IGCharacter'
    }]
}

export const Servers = new Server().getModelForClass(Server);
