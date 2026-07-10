const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const galleryRoutes = require('./routes/galleryRoutes');
const testimonialRoutes = require('./routes/testimonialsRoutes');
const contactRoutes = require('./routes/contactRoutes');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonial', testimonialRoutes);
app.use('/api/contact', contactRoutes);

const port = process.env.PORT || 8000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
