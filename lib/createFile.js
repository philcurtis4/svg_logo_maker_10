const fs = require('fs').promises
const renderShape = require('./shapes');

function textSvg (data) {
	return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.chars}</text>`
}



function writeSvg (shape, text) {
	


	return`
	<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

 	 ${shape}

	 ${text}

	</svg>
	`;
}



function createFile ( content) {
	fs.writeFile(`examples/practice.svg`, content);
}

module.exports = {createFile, textSvg, writeSvg};