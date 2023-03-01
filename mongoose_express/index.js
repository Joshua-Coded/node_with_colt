const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render("products/index", { products});
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render("products/show", { product} )
    } catch (err) {
        res.status(500).send(err.message);
    }
})



app.listen(4000, () => {
    console.log('listening on port 40000!!');
})