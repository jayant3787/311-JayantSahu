// helps u to construct file path
const path = require('path');
console.log(path.join(__dirname));
console.log(path.join(__filename, '..'));
const readmefilePath = path.join(__dirname, '..', 'README.md');
console.log(readmefilePath);
