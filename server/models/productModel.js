const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: String,
    price: String
    });
 var Product = mongoose.model('Product', productSchema);
 
 module.exports = Product