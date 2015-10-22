'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs-extra');

describe('mithril-webpack:app', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators-cov/app'))
			.withPrompts({
				'useBootstrap': false,
				'useJQuery': false,
				'useGit': false
			})
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
			'src/style/index.scss',
			'src/components/README.md',
			'src/images/README.md',
			'src/models/README.md',
			'src/modules/README.md',
		]);
	});
});

describe('mithril-webpack:component', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators-cov/component'))
			.withOptions({
				skipInstall: true
			})
			.withArguments(['testComponent'])
			.inTmpDir(function(dir) {
				var done = this.async();
				fs.outputFile(path.join(dir, 'src/style/index.scss'), '', done);
			})
			.on('end', done);
	});

	it('creates the component structure', function() {
		assert.file([
			'src/components/testComponent/controller.js',
			'src/components/testComponent/index.js',
			'src/components/testComponent/view.js',
			'src/components/testComponent/viewModel.js',
			'src/components/testComponent/style.scss'
		]);
	});
});

describe('mithril-webpack:model', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators-cov/model'))
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
		helpers.run(path.join(__dirname, '../generators-cov/route'))
			.withOptions({
				skipInstall: true
			})
			.withArguments(['/testRoute'])
			.inTmpDir(function (dir) {
				var done = this.async();
				fs.outputFile(path.join(dir, 'src/index.js'), '', function() {
					fs.outputFile(path.join(dir, 'src/style/index.scss'), '', done);
				});
			})
			.on('end', done);
	});

	it('creates the module structure', function() {
		assert.file([
			'src/modules/testRoute/controller.js',
			'src/modules/testRoute/index.js',
			'src/modules/testRoute/view.js',
			'src/modules/testRoute/viewModel.js',
			'src/modules/testRoute/style.scss'
		]);
	});
});