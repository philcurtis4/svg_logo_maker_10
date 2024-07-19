const shapes = require('./shapes');

describe('Shapes Tests', () => {
	it('Should return the svg to make a triangle', () => {
		const shape = new shapes.Triangle();
		shape.setColor('blue')

		const result = `<polygon points="150,10 240,170 60,170" fill="blue" />`;

		expect(shape.render()).toBe(result);


	});
	it('Should return the svg to make a circle', () => {
		const shape = new shapes.Circle();
		shape.setColor('red');

		const result = `<circle cx="150" cy="100" r="80" fill="red" />`;

		expect(shape.render()).toBe(result);
		
	});
	it('Should return the svg to make a square', () => {
		const shape = new shapes.Square();
		shape.setColor('green');

		const result = `<rect x="90" y="55" width="120" height="120" fill="green"/>`
		
		expect(shape.render()).toBe(result);
	});
})