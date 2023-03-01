const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/shopApp").
then(() => {
    console.log("connection opened!!!");
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err);
})

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 20
    },

    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive type dodod"]

    },

    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
        type: Number,
        default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }  
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
}) 


const Product = mongoose.model('Product', ProductSchema);

const bike =new Product({name: "Cycling Jersey", price: 200.3, categories: ["cycling"], size: 'XL'})
bike.save()
.then((data) => {
console.log("Item saved successfully!!")
console.log(data)
})
.catch((err) => {
console.log("OHH NOOO ERRORS")
console.log(err)

})

// Product.findOneAndUpdate({name: "Tire Pump"}, {price: -199}, {new: true, runValidators: true})
// .then((d) => {
//     console.log("it worked")
//     console.log(d)
// })
// .catch((err) => {
//     console.log("Oh no Error")
//     console.log(err)
// })