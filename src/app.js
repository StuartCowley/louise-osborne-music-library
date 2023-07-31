const express = require('express');
const { router } = require('./routes/artist');
const app = express();

app.use(express.json());

app.use('/artists', router);
app.use('/album', router);


module.exports = app;
