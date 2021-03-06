// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

const app = express();
const router = require('./router');
// App Setup
// morgan is a login framework (mostly for debugging)
// bodyParser parse to json
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({
  type: '*/*'
}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on : ${port}`);
