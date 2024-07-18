

const askUser = require('./lib/prompts');
const createFile = require('./lib/createFile');
const {Shapes, Circle, Triangle, Square, createShapeConstructor} = require('./lib/shapes');



function init () {
	askUser()
		.then((data) => {
			const shape = createShapeConstructor(data)
			shape.setColor(data.shapeColor);
			shape.render();
		})
}

init();