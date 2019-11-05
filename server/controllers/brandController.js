  
const mongoose = require('mongoose');
const Brand = mongoose.model('Brand');


exports.getBrands = async (req, res) => {
  
    // 1. Query the database for a list of all stores
    const brands = await Brand.find();
  
    res.json({
        status: 'success',
        data: {
            brands,
        }
    });
  };