const express = require('express');
const { router } = require('./routes/artist');
const { albumRouter } = require('./routes/album');
const app = express();

app.use(express.json());

app.use('/artists', router);
app.use('/album', albumRouter);


module.exports = app;
