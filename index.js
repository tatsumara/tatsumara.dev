const morgan = require('morgan');
const express = require('express');
const app = express();
const fetch = require('isomorphic-unfetch');
const spot = require('spotify-url-info')(fetch);

app.use(morgan('[:date[web]] :remote-addr :method :url :status'));
app.set('trust proxy', true);
app.use(express.static('static'));

let songArray;
let songArrayAge = 0;
app.get('/top4', async (req, res) => {
	if (Date.now() - songArrayAge > 86400000) {
		let data = await spot.getTracks('https://open.spotify.com/playlist/37i9dQZF1EpwA0Eb3mMXw4');
		songArray = data.sort(() => 0.5 - Math.random()).slice(0, 4).map(song => { return song.id });
		songArrayAge = Date.now()
	}
	res.send(songArray);
});

app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + '/static/404.html');
});


app.listen(80);
console.log('Listening on port 80.');