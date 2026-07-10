const Gallery = require('../models/Gallery');

const getGallery = async (req, res) => {
  const gallery = await Gallery.find();
  res.json(gallery);
};

const addGallery = async (req, res) => {
  const item = new Gallery(req.body);
  await item.save();
  res.json(item);
};

module.exports = { getGallery, addGallery };
