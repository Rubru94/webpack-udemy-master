const path = require("path");

console.log(path.dirname("./environment.js")); // .

console.log(path.parse("./environment.js")); // { root: '', dir: '.', base: 'environment.js', ext: '.js', name: 'environment' }

console.log(path.resolve("./environment.js")); // get absolute path --> /home/ruben/Documentos/projects/personal/webpack-udemy-master/13. NodeJS basics/environment.js

console.log(path.join("./environment.js")); // get relative path --> environment.js
console.log(path.join(".", "environment.js"));
