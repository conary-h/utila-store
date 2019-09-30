const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('./config/database');

const app = express();

dotenv.config();

console.log('process.env.DATABASE', process.env.DATABASE);

app.use('/oa', (req, res) => {
    res.json({'hi': 65});
});

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});