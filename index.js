const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('[:date[web]] :remote-addr :method :url :status'));
app.set('trust proxy', true);
app.use(express.static('static'));
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + '/static/404.html');
})

app.listen(80);
console.log('Listening on port 80.');