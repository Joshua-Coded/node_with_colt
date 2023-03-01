const mongoose = require('mongoose');

const Product = require('./models/productModels');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true})
.then(() => {
    console.log('Connection open');
})
.catch(err => {
    console.log('oh no connection error');
    console.log(err);
});


// const p = new Product({
//     name: "Ruby Grape Fruit",
//     price: 1.78,
//     category: "fruit"
// })
// p.save().then((p) => {
//     console.log(p);
// })
// .catch((err) => {
//     console.log(err);
// });

const seedProducts = [
    {
        name: "Orange",
        price: 3.76,
        category: "fruit"
    },
    {
        name: "carrot",
        price: 1.76,
        category: "vegetable"
    },
    {
        name: "Cabbage",
        price: 6.76,
        category: "vegetable"
    },
    {
        name: "water melon",
        price: 0.76,
        category: "fruit"
    },
    {
        name: "mango",
        price: 2.76,
        category: "fruit"
    },
    {
        name: "lettus",
        price: 1.6,
        category: "vegetable"
    },
    {
        name: "passion fruit",
        price: 7.76,
        category: "fruit"
    }
]


Product.insertMany(seedProducts)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});