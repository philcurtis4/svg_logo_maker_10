
class Shapes {
	setColor(color) {
		this.color = color;
	}

}


class Circle extends Shapes {
	
	render () {
		return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
	}
}

class Triangle extends Shapes {

	render () {
		return `<polygon points="150,10 240,170 60,170" fill="${this.color}" />`;
	}

}

class Square extends Shapes{

	render () {
		return `<rect x="90" y="55" width="120" height="120" fill="${this.color}"/>`;

	}

}


function createShapeConstructor (data) {
	let shape;
	if(data.shape === 'triangle'){
		shape = new Triangle();
	}else if(data.shape === 'circle'){
		shape = new Circle();
	}else if(data.shape === 'square'){
		shape = new Square();
	}
	 
	return shape;
	
}





module.exports = {Shapes, Circle, Triangle, Square, createShapeConstructor};