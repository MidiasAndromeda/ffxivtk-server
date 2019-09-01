import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    googleId: String,
    avatar: String
});

export const User = mongoose.model('user', UserSchema);