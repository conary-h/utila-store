const path = require('path');
const mongoose = require('mongoose');

const dotenvPath = path.join(__dirname, '..', '..', '.env.local');
const dotenv = require('dotenv').config({ path: dotenvPath });
const Product = require('./productModel');
const Brand = require('../brand/brandModel');
const Category = require('../categories/categoryModel');


mongoose.connect(process.env.DATABASE_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Product model', () => {
  beforeAll(async () => {
    await Product.deleteMany({});
    await Brand.deleteMany({});
    await Category.deleteMany({});
  });

  afterEach(async () => {
    await Product.deleteMany({});
    await Brand.deleteMany({});
    await Category.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should has a model', () => {
    expect(Product).toBeDefined();
  });


  it('save and gets a product', async () => {
    const category = new Category({ categoryName: 'Electronics' });
    const brand = new Brand({ brandName: 'Acer' });

    await category.save();
    await brand.save();

    const foundCategory = await Category.findOne({ categoryName: 'Electronics' });
    const foundBrand = await Brand.findOne({ brandName: 'Acer' });

    const product = new Product({
      productName: 'Macbook Pro 15',
      brandName: 'Apple',
      retailPrice: 299999,
      afterPromoRate: 289999,
      thumbnail: 'macbook.jpg',
      brand: foundBrand.id,
      category: foundCategory.id
    });

    await product.save();

    const productName = 'Macbook Pro 15';
    const foundProduct = await Product.findOne({ productName: 'Macbook Pro 15' });

    expect(foundProduct).toBeDefined();
    expect(foundProduct.productName).toBe(productName);
  });

  it('update a product', async () => {
    const category = new Category({ categoryName: 'Electronics' });
    const brand = new Brand({ brandName: 'Acer' });

    await category.save();
    await brand.save();

    const foundCategory = await Category.findOne({ categoryName: 'Electronics' });
    const foundBrand = await Brand.findOne({ brandName: 'Acer' });

    const product = new Product({
      productName: 'Macbook Pro 15',
      brandName: 'Apple',
      retailPrice: 299999,
      afterPromoRate: 289999,
      thumbnail: 'macbook.jpg',
      brand: foundBrand.id,
      category: foundCategory.id
    });

    await product.save();

    product.afterPromoRate = 279999;

    await product.save();

    const productName = 'Macbook Pro 15';
    const foundProduct = await Product.findOne({ productName });

    expect(foundProduct.afterPromoRate).toBe(279999);
  });
});