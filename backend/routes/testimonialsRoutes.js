const express = require('express');
const router = express.Router();
const {
  getTestimonial,
  addTestimonial,
} = require('../controllers/testimonialController');

router.get('/', getTestimonial);
router.post('/', addTestimonial);

module.exports = router;
