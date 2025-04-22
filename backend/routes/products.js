const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
  const nuevoProducto = new Product(req.body);
  const productoGuardado = await nuevoProducto.save();
  res.status(201).json(productoGuardado);
});

module.exports = router;
