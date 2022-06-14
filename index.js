const morgan = require('morgan');
const express = require('express');
const app = express();
const fetch = require('isomorphic-unfetch');
const spot = require('spotify-url-info')(fetch);

app.use(morgan('[:date[web]] :remote-addr :method :url :status'));
app.set('trust proxy', true);
app.use(express.static('static'));

app.get('/top4', async (req, res) => {
	let data = await spot.getTracks('https://open.spotify.com/playlist/37i9dQZF1EpwA0Eb3mMXw4');
	data = data.sort(() => 0.5 - Math.random()).slice(0, 4).map(song => { return song.id });
	res.send(data);
});

app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + '/static/404.html');
});


app.listen(80);
console.log('Listening on port 80.');