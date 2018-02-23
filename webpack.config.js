const webpack = require ('webpack');
const path = require('path');

const app_dir = path.resolve(__dirname, 'client/app');
const build_dir = path.resolve(__dirname, 'public')

module.exports = {
    entry: `${app_dir}/app.jsx`,
    output: {
        path: build_dir,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}