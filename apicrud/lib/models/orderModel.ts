import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    products: [{
        product: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });