var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		root: [path.join(__dirname, 'bower_components')]
	},
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		),
		new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
	],
	module: {
		loaders: [
			// ES6 transpiler
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			// SASS compiler
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			// Static files
			{
				test: /\.html$/,
				loader: 'static-loader'
			}
		]
	}
}