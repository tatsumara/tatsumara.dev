const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('[:date[web]] :remote-addr :method :url :status'));
app.set('trust proxy', true);
app.use(express.static('static'));

app.listen(80);
console.log('Listening on port 80.');