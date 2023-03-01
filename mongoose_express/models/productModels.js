const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

// Generate a unique _id field for each document
productSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    next();
  })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;