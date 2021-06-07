import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    prix: {
        type: Number,
        required: 'Enter a price'
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Categorie',
        required: 'Enter a category'
    },
    typeVente: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'TypeVente',
    },
    imgUrl: {
        type: String,
        required: 'Enter an img URL'
    },
      active: {
        type: Boolean,
        default: true
    } ,
   
    description: {
        type: String,
        default: ''
    }
}, 
 {timestamps:  {
        createdAt:"crAt",
        updatedAt:"upAt"
    }
});