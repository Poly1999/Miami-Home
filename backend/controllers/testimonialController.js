const Testimonial = require('../models/Testimonial');

const getTestimonial = async (req, res) => {
  const testimonial = await Testimonial.find();
  res.json(testimonial);
};

const addTestimonial = async (req, res) => {
  const comment = new Testimonial(req.body);
  await comment.save();
  res.json(comment);
};

module.exports = { getTestimonial, addTestimonial };
