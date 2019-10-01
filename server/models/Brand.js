const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: 'You must supply a brand name'
    }
});

module.exports = mongoose.model('Brand', brandSchema);
