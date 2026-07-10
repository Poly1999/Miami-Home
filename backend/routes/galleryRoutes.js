const express = require('express');
const router = express.Router();
const { getGallery, addGallery } = require('../controllers/galleryController');

router.get('/', getGallery);
router.post('/', addGallery);

module.exports = router;
