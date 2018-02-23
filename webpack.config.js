const webpack = require ('webpack');
const path = require('path');

const app_dir = path.resolve(__dirname, 'client/app');
const build_dir = path.resolve(__dirname, 'client/public')

module.exports = {
    entry: `${app_dir}/app.jsx`,
    output: {
        path: build_dir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}