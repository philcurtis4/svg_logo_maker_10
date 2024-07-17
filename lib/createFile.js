const fs = require('fs').promises


function createFile (fileName, content) {
	fs.writeFile(`${fileName}.svg`, content);
}

module.exports = createFile;