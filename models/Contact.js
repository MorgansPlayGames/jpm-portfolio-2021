const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required',
    },

    who:{
        type:String
    },

    email: {
        type: String,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },

    linkedIn: {
        type: String
    },

    message: {
        type: String
    },

    creationDate: {
        type: Date,
        default: Date.now,
    },

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;