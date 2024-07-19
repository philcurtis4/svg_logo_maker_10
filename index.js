

const askUser = require('./lib/prompts');

const {createShapeConstructor} = require('./lib/shapes');
const {createFile, textSvg, writeSvg} = require('./lib/createFile');



function init () {
	askUser()
		.then((data) => {
			const shape = createShapeConstructor(data)
			shape.setColor(data.shapeColor);
			const renderedShape = shape.render()
			const renderedText = textSvg(data)

			return {renderedShape, renderedText};
		})
		.then((results) => {
			const {renderedShape, renderedText} = results
			return writeSvg(renderedShape, renderedText);
		})
		.then((finalSvg) => {
			createFile(finalSvg);
			console.log('Generated logo.svg');
		})
}

init(); 