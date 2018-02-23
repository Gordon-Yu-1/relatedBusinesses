const path = require('path');

const appDir = path.resolve(__dirname, 'client');
const buildDir = path.resolve(__dirname, 'public');

module.exports = {
	entry: `${appDir}/index.jsx`,
	output: {
		path: buildDir,
		filename: 'bundle.js',
	},
	module: {
	    rules: [
    	{
	    		test: /\.(js|jsx)$/,
	    		exclude: /node_modules/,
	    		use: ['babel-loader'],
    	},
    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		use: ['babel-loader', 'eslint-loader'],
    	},
	    ],
	},
};
