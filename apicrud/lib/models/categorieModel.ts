import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorieSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });