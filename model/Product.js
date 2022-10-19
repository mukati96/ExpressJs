
var mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productName:{type:String,required:"true",trim:"true"},
    price:{type:Number,required:"true"}
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel;