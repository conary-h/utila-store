const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: 'You must supply the product\'s name',
  },
  brandName: {
    type: String,
    required: 'You must supply a description',
  },
  retailPrice: {
    type: Number,
    required: 'You must supply a retail price.',
  },
  afterPromoRate: {
    type: Number,
    required: 'You must supply a after promo price.',
  },
  thumbnail: {
    type: String,
    required: 'You must supply a image.',
  },
  brand: {
    type: mongoose.Schema.ObjectId,
    ref: 'Brand',
    required: 'You must supply a brand.',
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: 'You must supply a category.',
  },
});

/**
 * Prepopulate fields on find
 * It populates the brand and category content.
 */
function autopopulate() {
  return this.populate('brand')
    .populate('category');
}

reviewSchema.pre('find', autopopulate);
reviewSchema.pre('findOne', autopopulate);


module.exports = mongoose.model('Product', productSchema);
