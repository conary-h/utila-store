// const app = require('./app');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://conary:samsung@cluster0-nmx0q.mongodb.net/test');

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

exports.module = mongoose;