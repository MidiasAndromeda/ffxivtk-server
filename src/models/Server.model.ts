import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class Server extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop()
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'IGCharacter'
    }]
}

export const Servers = new Server().getModelForClass(Server);
