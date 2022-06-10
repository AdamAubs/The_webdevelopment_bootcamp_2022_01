const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTED")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online:{
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: ['S','M','L']
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Cycling Jersey', price: 29.50, categories:['Cycling'], size: 'S'})
bike.save()
    .then(data => {
        console.log("IT WORKED")
        console.log(data)
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -19.99}, {new:true, runValidators: true})
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR")
//         console.log(err)
//     })

