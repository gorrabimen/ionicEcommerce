import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });