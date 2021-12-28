const footer = document.getElementById('footer');
footer.innerHTML = /*html*/ `
	<button onclick="darkMode()">dark/light</button>
	designed and coded by me.
	<a href="https://github.com/tatsumara/tatsumara.tk">source</a>
`
function darkMode() {
	document.body.classList.toggle("light")
}