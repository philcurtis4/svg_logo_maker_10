<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg"></svg>

function createCircle (color) {
	return `<circle cx='150' cy="100" r='80' fill='${color}' />`
}

function createTriangle (color) {
	return `<polygon points="100,10 190,190 10,190" fill="${color}" />`
}

function createSquare (color) {
	return `<rect x="10" y="10" width="30" height="30" fill="${color}"/>`
}

createCircle();
module.exports = createCircle;