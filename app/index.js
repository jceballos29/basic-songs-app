require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const databaseConnection = require('./config/database');

const app = express()
const accessLogStream = fs.createWriteStream(path.resolve("access.log"), {flags: 'a'});

app.use(cors());
app.use(morgan('combined', {stream: accessLogStream}));
app.use(express.json());

app.use('/api', require('./routes/tracks'));

databaseConnection();

module.exports = app;