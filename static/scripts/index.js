function updateClock() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	const time = document.getElementById('time');
	time.innerHTML = /*html*/`<p>${hours}:${minutes}:${seconds}<p>`
}
updateClock();
setInterval(updateClock, 1000);

async function loadSongs() {
	const result = await fetch("/top4");
	const top4 = await result.json();

	top4.forEach(id => {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = /*html*/`<iframe src="https://open.spotify.com/embed/track/${id}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
		document.getElementById("spotify").appendChild(tempDiv)
	});
}
loadSongs();

function toggleTheme() {
	document.body.classList.toggle("light");
	if(window.localStorage.getItem("light-theme") === "true"){
		window.localStorage.setItem("light-theme", "false");
		document.getElementById("theme-toggle").innerHTML = "light";
	} else {
		window.localStorage.setItem("light-theme", "true")
		document.getElementById("theme-toggle").innerHTML = "dark";
	}
}
if(window.localStorage.getItem("light-theme") === "true"){
	document.body.classList.toggle("light");
	document.getElementById("theme-toggle").innerHTML = "dark";
}

const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiAt = 0;
document.addEventListener('keydown', key => {
	if (key.key === konamiPattern[konamiAt]) {
		konamiAt++;
	} else {
		konamiAt = 0;
		return;
	}
	if (konamiAt >= konamiPattern.length) {
		const headerTitle = document.getElementById('header-title');
		headerTitle.innerHTML = /*html*/`you found me!`
	}
})

initComments({
	node: document.getElementById('comment-section'),
	defaultHomeserverUrl: 'https://matrix.cactus.chat:8448',
	serverName: 'cactus.chat',
	siteName: 'tatsumara.dev',
	commentSectionId: 'section1'
})