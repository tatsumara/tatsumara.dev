const morgan = require('morgan');
const Express = require('express');
const app = Express();
require('dotenv').config();

const Spotify = require('spotify-api.js');
const spot = new Spotify.Client({
	token: {
		clientID: process.env.clientID,
		clientSecret: process.env.clientSecret,
	},
	refreshToken: true,
	onRefresh() {
		console.log('Refreshed token.')
	}
});

app.use(morgan('[:date[web]] :remote-addr :method :url :status'));
app.set('trust proxy', true);
app.use(Express.static('static'));

let songArray;
let songArrayAge = 0;
app.get('/top4', async (req, res) => {
	if (Date.now() - songArrayAge > 86400000) {
		let data = await spot.playlists.getTracks('37i9dQZF1EpwA0Eb3mMXw4');
		songArray = data.sort(() => Math.random() - 0.5).slice(0, 4).map(song => { return song.track.id });
		songArrayAge = Date.now();
	}
	res.send(songArray);
});

app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + '/static/404.html');
});


app.listen(80);
console.log('Listening on port 80.');