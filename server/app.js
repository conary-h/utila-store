const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const dotenvPath = path.join(__dirname, '..', 'server', '.env.local');
const dotenv = require('dotenv').config({ path: dotenvPath });
const app = express();
const mongoose = require('./config/database');

app.use('/', routes);

app.use(bodyParser.json());

// app.use('/api/events', events.API);
// app.use('/api/forms', forms);

module.exports = app;
