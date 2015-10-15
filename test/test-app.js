'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs-extra');

describe('mithril-webpack:app', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.withOptions({
				skipInstall: true
			})
			.on('end', done);
	});

	it('creates the application structure', function() {
		assert.file([
			'bower.json',
			'package.json',
			'webpack.config.js',
			'.gitignore',
			'.jshintrc',
			'src',
			'src/index.html',
			'src/index.js',
			'src/components/.gitkeep',
			'src/images/.gitkeep',
			'src/models/.gitkeep',
			'src/views/.gitkeep',
		]);
	});
});

describe('mithril-webpack:component', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/component'))
			.withOptions({
				skipInstall: true
			})
			.withArguments(['testComponent'])
			.on('end', done);
	});

	it('creates the component structure', function() {
		assert.file([
			'src/components/testComponent/controller.js',
			'src/components/testComponent/index.js',
			'src/components/testComponent/view.js',
			'src/components/testComponent/viewModel.js',
			'src/components/testComponent/styles.scss'
		]);
	});
});

describe('mithril-webpack:model', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/model'))
			.withOptions({
				skipInstall: true
			})
			.withArguments(['testModel'])
			.on('end', done);
	});

	it('creates the model file', function() {
		assert.file([
			'src/models/testModel.js'
		]);
	});
});

describe('mithril-webpack:route', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/route'))
			.withOptions({
				skipInstall: true
			})
			.withArguments(['/testRoute'])
			.inTmpDir(function (dir) {
				var done = this.async();
				fs.outputFile(path.join(dir, 'src/index.js'), '', done);
			})
			.on('end', done);
	});

	it('creates the view structure', function() {
		assert.file([
			'src/views/testRoute/controller.js',
			'src/views/testRoute/index.js',
			'src/views/testRoute/view.js',
			'src/views/testRoute/viewModel.js',
			'src/views/testRoute/styles.scss'
		]);
	});
});