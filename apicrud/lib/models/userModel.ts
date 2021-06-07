import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  
    name: {
        type: String,
        required: 'Enter a name'
    },
    mobile: {
        type: String,
        required: 'Enter a phone number'
    },
},
 {timestamps:  {
        createdAt:"crAt",
        updatedAt:"upAt"
    }
});