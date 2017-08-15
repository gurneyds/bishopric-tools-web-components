const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			}
		],
	}
};