import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
}, { timestamps: true });