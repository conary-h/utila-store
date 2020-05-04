const path = require('path');
const mongoose = require('mongoose');

const dotenvPath = path.join(__dirname, '..', '..', '.env.local');
const dotenv = require('dotenv').config({ path: dotenvPath });
const Brand = require('./brandModel');


mongoose.connect(process.env.DATABASE_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

describe('Brand model', () => {
  beforeAll(async () => {
    await Brand.deleteMany({});
  });

  afterEach(async () => {
    await Brand.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should has a model', () => {
    expect(Brand).toBeDefined();
  });


  it('save and gets a brand', async () => {
    const brand = new Brand({
      brandName: 'Apple',
    });

    await brand.save();

    const brandName = 'Apple';
    const foundBrand = await Brand.findOne({ brandName });

    expect(foundBrand.brandName).toBe(brandName)
  });

  it('update a brand', async () => {
    const brand = new Brand({
      brandName: 'Apple',
    });

    await brand.save();

    brand.brandName = 'HP';

    await brand.save();

    const brandName = 'HP';
    const foundBrand = await Brand.findOne({ brandName });

    expect(foundBrand.brandName).toBe(brandName);
  });
});