const path = require('path');

module.exports ={
    context: __dirname,
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    }
};