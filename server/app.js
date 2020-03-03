const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Initialise application
const app = express();

const sendMarkup = (_, res) => res.send(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Elevhjelpa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
  </head>
  <body>
    <div id="app-container"></div>
    <script src="/js/app.bundle.js"></script>
  </body>
</html>`);

// Initialize HTTP logging for the application
require('./logging/http-logger')(app);

app.use(helmet());
app.use(cors());

// Express setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes to index.html, css and js
app.use('/assets', express.static(path.join(__dirname, '../static', 'assets')));
app.use('/favicon.ico', express.static(path.join(__dirname, '../static/favicon.ico')));
// Route the bundled js-file produced webpack client config
app.use('/js', express.static(path.join(__dirname, '../static', 'js')));
app.get('/', sendMarkup);

// Export
module.exports = app;
