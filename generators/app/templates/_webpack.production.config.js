var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	resolve: {
		root: [
			// Add bower_components to the resolve path
			path.join(__dirname, 'bower_components')
		],
		alias: {
			// Alias for unminified mithril library
			m: path.join(__dirname, 'node_modules/mithril/mithril'),
			// Add alias for components folder
			components: path.join(__dirname, 'src/components'),
			// Add alias for images folder
			images: path.join(__dirname, 'src/images'),
			// Add alias for models folder
			models: path.join(__dirname, 'src/models'),
			// Add alias for modules folder
			modules: path.join(__dirname, 'src/modules'),
			// Add alias for layouts folder
			layouts: path.join(__dirname, 'src/layouts')
		}
	},
	plugins: [
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5,
			moveToParents: true,
			entryChunkMultiplicator: 2
		}),
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		),
		new ExtractTextPlugin('[name].[contenthash].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
        	m: 'mithril'
        }),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ManifestPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.tpl'),
			inject: 'body'
		})
	],
	module: {
		loaders: [
			// ES6 transpiler
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/
			},
			// SASS compiler
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			// Static files
			{
				test: /(\.html|txt)$/,
				loader: 'static'
			},
			// Image files
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url?limit=8192'
			},
			// Font files
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
		]
	}
}