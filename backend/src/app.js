const express = require('express');
const cors = require('cors');

//Initialize Server
const app = express();
require('./database');

//Settings
app.set('port',process.env.PORT || 3600);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./routes/notes.routes'))

module.exports = app;