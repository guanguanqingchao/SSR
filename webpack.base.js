const path = require('path');

module.exports = {

    resolve: {
        alias: {
            client: path.resolve(__dirname, 'src/client/'),
            container: path.resolve(__dirname, 'src/container/'),
            src: path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
            store: path.resolve(__dirname, 'src/store/')
        }
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'stage-0', ['env', {
                    targets: {
                        browsers: ['last 2 versions']
                    }
                }]]
            }
        }]
    }

}