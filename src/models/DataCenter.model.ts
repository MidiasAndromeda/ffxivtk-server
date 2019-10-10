import { prop, Typegoose } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';

class DataCenter extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop({ required: true, maxlength: 2 })
    location: string;
    @prop()
    servers: [{
        type: mongoose.Types.ObjectId,
        ref: 'Server'
    }]
}

export const DataCenters = new DataCenter().getModelForClass(DataCenter);
