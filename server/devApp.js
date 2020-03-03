const app = require('./app');
const path = require('path');
const { hot, dev } = require('./devTools');

app.use(dev());
app.use(hot());

module.exports = app;
