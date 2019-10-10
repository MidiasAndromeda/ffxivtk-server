import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class PlayType extends Typegoose {
    @prop({ required: true })
    type: string;
}

export const PlayTypes = new PlayType().getModelForClass(PlayType);
