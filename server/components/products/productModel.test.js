const mongoose = require('mongoose');
const Product = require('productModel');


mongoose.connect(process.env.DATABASE_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Product model', () => {
  beforeAll(async () => {
    await Product.remove({});
  });

  afterEach(async () => {
    await Product.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should has a model', () => {
    expect(Product).toBeDefined();
  });


  it('save and gets a product', () => {
    const product = new Product({
      productName: 'Macbook Pro 15',
      brandName: 'Apple',
      retailPrice: 299999,
      afterPromoRate: 289999,
      thumbnail: 'macbook.jpg',
      brand: null,
      category: null
    });

    await product.save();

    const productName = 'Macbook Pro 15';
    const foundProduct = await Product.findOne({ productName });

    expect(foundProduct.name).toBe(productName)
  });

  it('update a product', () => {
    const product = new Product({
      productName: 'Macbook Pro 15',
      brandName: 'Apple',
      retailPrice: 299999,
      afterPromoRate: 289999,
      thumbnail: 'macbook.jpg',
      brand: null,
      category: null
    });

    await product.save();

    product.afterPromoRate = 279999;

    await product.save();

    const productName = 'Macbook Pro 15';
    const foundProduct = await Product.findOne({ productName });

    expect(foundProduct.afterPromoRate).toBe(279999);
  });
});