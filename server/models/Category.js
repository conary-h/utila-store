const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: 'You must supply a cateogory name'
    }
});

module.exports = mongoose.model('Category', categorySchema);
