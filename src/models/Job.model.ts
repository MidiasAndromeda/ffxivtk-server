import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class Job extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop({ required: true })
    icon: string;
}

export const Jobs = new Job().getModelForClass(Job);
