const Contact = require('../models/Contact');

const addContact = async (req, res) => {
  const form = new Contact(req.body);
  await form.save();
  res.json(form);
};

module.exports = { addContact };
