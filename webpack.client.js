const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');



const clientWebpack = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, ],
    },


}
module.exports = merge(clientWebpack, base)