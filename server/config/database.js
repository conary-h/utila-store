// const app = require('./app');
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to database!`);
});

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
}

require('../models/index');

exports.module = mongoose;