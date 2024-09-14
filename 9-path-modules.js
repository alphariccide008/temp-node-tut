const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/','subfolder', 'Test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);


const absolute = path.resolve(__dirname,'content','subfolder','Test.txt');
console.log(absolute);  // absolute path of the file