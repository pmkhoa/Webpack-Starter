var path = require('path');
var commonConfig = require('./webpack.common.config');

var output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:4567/build/',
    filename: 'bundle.js'
};

module.exports = Object.assign({
    output: output
}, commonConfig);
