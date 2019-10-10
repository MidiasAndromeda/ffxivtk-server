import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class DataCenter extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop()
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'Server'
    }]
}

export const DataCenters = new DataCenter().getModelForClass(DataCenter);
