import express from 'express';
import bodyParser from 'body-parser';
import products from './data/products.js';
import dotenv from  'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const port = process.env.PORT;
const  dbUrl =process.env.MONGO_URL

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello, ${name}!`);
});


app.get('/api/products', (req, res) => {
  res.json(products);
});
// Get a single product by its ID
app.get('/api/product/:id', (req, res) => {
  // Find the product with the given ID in the array of products
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  } else {
    return res.json(product);
  }
});
mongoose.connect()
app.listen(port, () => console.log(`Server is running on Port ${port}`));
