global.__basedir = __dirname;
global.__config = require('./config/index.json');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${__config.DB}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json({ limit: '20000kb'}));

const restApiV1 = require('./rest-api/v1');
app.use('/api/v1', restApiV1);

const port = __config.server.port;
const ip = __config.server.ip;

app.listen(port, ip, () => console.log(`EOW Data Storage server has started on ${ip}:${port}`));