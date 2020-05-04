const path = require('path');
const mongoose = require('mongoose');

const dotenvPath = path.join(__dirname, '..', '..', '.env.local');
const dotenv = require('dotenv').config({ path: dotenvPath });
const Category = require('./categoryModel');


mongoose.connect(process.env.DATABASE_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Category model', () => {
  beforeAll(async () => {
    await Category.deleteMany({});
  });

  afterEach(async () => {
    await Category.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should has a model', () => {
    expect(Category).toBeDefined();
  });


  it('save and gets a brand', async () => {
    const category = new Category({
      categoryName: 'Electronics',
    });

    await category.save();

    const categoryName = 'Electronics';
    const foundBrand = await Category.findOne({ categoryName });

    expect(foundBrand.categoryName).toBe(categoryName)
  });

  it('update a category', async () => {
    const category = new Category({
      categoryName: 'Electronics',
    });

    await category.save();

    category.categoryName = 'Computers';

    await category.save();

    const categoryName = 'Computers';
    const foundCategory = await Category.findOne({ categoryName });

    expect(foundCategory.categoryName).toBe(categoryName);
  });
});