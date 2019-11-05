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
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoader: 1,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                }
            }],
        }, ],
    },


}
module.exports = merge(clientWebpack, base)