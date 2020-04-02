const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: 'You must provide the created at date.',
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author!',
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: 'You must supply a product.',
  },
  comment: {
    type: String,
    required: 'You must provide a comment.',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

// function autopopulate(next) {
//   this.populate('author');
//   next();
// }

// reviewSchema.pre('find', autopopulate);
// reviewSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('Review', reviewsSchema);
