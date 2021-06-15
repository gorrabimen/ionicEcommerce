import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    price: {
        type: Number,
        required: 'Enter a price'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    },
    imageUrl: {
        type: String,
        required: 'Enter an img URL',
    },
    description: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });