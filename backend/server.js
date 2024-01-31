/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import products from './data/products.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Set a default port if not specified in the environment
const dbUrl = process.env.MONGO_URL;

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
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  } else {
    return res.json(product);
  }
});

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => console.log(`Server is running on Port ${port}`));
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
  });
