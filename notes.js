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

// sass and css loader
// *********** Step 3 ***********
/*
=> install sass loader with css loader
npm i -D sass style-loader css-loader sass-loader

=> include loader configuration and dynamic entry point

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};


*/

// html-webpack-plugin
// *********** Step 4 ***********
/*
=> install html-webpack-plugin to generate html file to serve dist files. this plugin will include all the js and css files into this html file automatically.

npm i -D html-webpack-plugin
=> require a variable inside config file like HtmlWebpackPlugin = require('html-webpack-plugin');
=> add plugins property into config file
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Practice",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
=> caching 
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

use contenthash
*/

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
