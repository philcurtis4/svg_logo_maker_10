const fs = require('fs').promises
const renderShape = require('./shapes');

function textSvg (data) {
	const text = data.chars.toUpperCase();
	if(data.shape === 'triangle'){
		return `<text x="150" y="135" font-size="60" text-anchor="middle" fill="${data.textColor}">${text}</text>`
	}else if(data.shape === 'circle'){
		return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${text}</text>`
	}else if(data.shape === 'square'){
		return `<text x="150" y="135" font-size="60" text-anchor="middle" fill="${data.textColor}">${text}</text>`
	}
	
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
	fs.writeFile(`examples/logo.svg`, content);
}

module.exports = {createFile, textSvg, writeSvg};