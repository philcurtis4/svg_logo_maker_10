const inquirer = require('inquirer');

const askUser = require('./lib/prompts');
const createFile = require('./lib/createFile');

function init () {
	askUser();
}

init();