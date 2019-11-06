import { prop, Typegoose, arrayProp } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';
import { Servers } from './Server.model';

class DataCenter extends Typegoose {
    @prop({ required: true })
    name: string;
    @prop({ required: true, maxlength: 2 })
    location: string;
    @arrayProp({ items: Servers })
    servers: [{
        type: mongoose.Types.ObjectId,
        ref: 'Server'
    }]
}

export const DataCenters = new DataCenter().getModelForClass(DataCenter);
