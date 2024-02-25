// *********** Step 1 ***********
/*
=> create 'dist' and 'src' folder.

=> as webpack run on nodejs, so install nodejs
npm init -y

=> install webpack and webpack-cli as dev dependencies
npm i -D webpack webpack-cli
*/

// *********** Step 2 ***********
/*
=> create webpack.config.js file and configure with it
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
Note: later we will see dynamic filename and multiple entry files.

=> change script in package.json file
  "scripts": {
    "build": "webpack"
  },
=> now we can bundling our js file entry to output folder after running 'npm run build' command
=> in html file, include this main.js file. later we will see automation.
*/

// => above configuration is enough for just js bundling. we need babel transpiler loader to bundle all js files.
/*
Project folder Structure:
webpack
|- package.json
|- package-lock.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
  |- app.js
|- /node_modules

*/
