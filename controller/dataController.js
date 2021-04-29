Contact = require("../models/Contact");

module.exports = {
  createContact: async function (req, res) {
    try {
      const newContact = req.body;
      const addedContact = await Contact.create(newContact);
      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
