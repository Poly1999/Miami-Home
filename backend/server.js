const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

require('dotenv').config();

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
