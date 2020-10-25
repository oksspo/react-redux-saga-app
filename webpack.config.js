const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: `${path.resolve(__dirname)}/build`,
		publicPath: '/',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				enforce: 'pre',
				loader: 'eslint-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './public/index.html'),
			filename: 'index.html',
			inject: 'body'
		})
	],

	devtool: 'source-map',

	devServer: {
		host: 'localhost',
		port: 8081,
		contentBase: `${path.resolve(__dirname)}/build`,
		hot: true
	}
};