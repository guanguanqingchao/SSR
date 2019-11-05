const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.base');

const serverWebpack = {
    target: 'node', //告知webapck打包服务端代码
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()], //在服务端打包的时候忽略node_modules下的依赖


    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoader: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                ]
            }

        ]
    }
}
module.exports = merge(serverWebpack, base)