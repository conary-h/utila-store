const express = require('express');
const path = require('path');

const app = express();

app.use('/oa', (req, res) => {
    res.json({'hi': 65});
});

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});