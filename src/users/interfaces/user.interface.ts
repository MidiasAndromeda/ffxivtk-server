import { Document } from 'mongoose';

export interface User extends Document {
    id: string;
    readonly name: string;
}