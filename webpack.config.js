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
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				// use: {
				// 	loader: 'babel-loader',
				// 	options: {
				// 	presets: ['env']
				// 	}
				// }
			},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: {
				loader: 'css-loader'
			}
		}
  ]
	}
};
