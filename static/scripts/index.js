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

function toggleTheme() {
	document.body.classList.toggle("light");
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