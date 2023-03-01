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
app.use(express.urlencoded({extended: true}));

// routes

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render("products/index", { products});
})

app.get("/products/new", (req, res) => {
    res.render("products/new")
})


app.post("/products", async (req, res) => {
    const product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save() 
    console.log(product);
        res.redirect(`/products/${product._id}`);
});

// app.post("/products", async (req, res) => {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     console.log(newProduct);
//     res.send("making new product");
// })



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