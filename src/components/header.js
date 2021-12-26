const header = document.getElementById('header');
header.innerHTML = /*html*/ `
	<div id="header-title">
		<a href="./">tatsumara.tk</a>
	</div>
	<a href="https://discord.gg/accela">discord</a>
	<a href="https://github.com/tatsumara">github</a>
	<div id="time"></div>
`
function updateClock() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	const time = document.getElementById('time');
	time.innerHTML = `${hours}:${minutes}:${seconds}`
}
updateClock();
setInterval(updateClock, 1000);