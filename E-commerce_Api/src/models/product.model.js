const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    discountPersent: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    sizes: [
        {
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    imageUrl: {
        type: String,
        required: true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
const Product = mongoose.model('products', productSchema);
module.exports = Product
