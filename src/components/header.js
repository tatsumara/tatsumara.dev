const header = document.createElement('div');
header.id = 'header';
header.innerHTML = /*html*/ `
	<div id="header-title">
		<a href="./">tatsumara.tk</a>
	</div>
	<a href="#">About</a>
`
document.body.appendChild(header)