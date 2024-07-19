const inquirer = require('inquirer');


const questions = [
	{
		message: 'Please enter up to 3 charaters you want on your logo: ',
		name: 'chars',
		validate: function(input) {
			if (input.length > 3) {
			  return 'Text is too long. Please enter a maximum of 3 characters.';
			}
			return true;
		  }
		
	},
	{
		name: 'textColor',
		message: 'Please enter the color you want your text to be: '
	},
	{
		type: 'list',
		name: 'shape',
		message: 'Please choose a shape for your logo:',
		choices: ['circle', 'triangle', 'square']
	},
	{
		name: 'shapeColor',
		message: 'Please enter the color you want your logo shape to be: '
	}
];

function askUser () {
	return inquirer
		.prompt(questions);
}


module.exports = askUser;