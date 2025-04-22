const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true},
  marca: String,
  precio: { type: Number, required: true},
  talla: [String], // para que coincida con las claves del stock
  imagen: String,
  stock: {
    type: Map,
    of: Number,
    default: {"8": 10, "9": 5, "7": 4}
  },
  descripcion: String,
  imagenes: [String],
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
