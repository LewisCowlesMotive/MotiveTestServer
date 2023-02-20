const express = require('express');
const router = express.Router();

const app = express();

const data = require('./data');

router.get('/', async (_, res) => res.status(200).json(data));

app.use('/transactions', router)

// handle errors
app.use((error, _, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message });
  next();
});

module.exports = app;
