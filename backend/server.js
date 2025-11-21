require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productsRouter = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('public/uploads'));
app.use('/products', productsRouter);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

app.use('/products', productsRouter);

// optional quick endpoint for autosuggest (same as /products/search)
app.get('/search', async (req, res) => {
  // redirect to /products/search for convenience
  res.redirect(`/products/search?q=${encodeURIComponent(req.query.q || '')}`);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
