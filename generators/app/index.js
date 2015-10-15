'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('appname', {
			desc: 'New Mithril application name, this will be the name of the folder the application is created in',
			type: String, 
			optional: true,
			required: false
		});
		if(this.appname) {
			this.destinationRoot(this.appname);
		}
		// Options
		// this.option('grunt');
		// this.option('gulp');
		// this.option('webpack');
		// this.option('es6');
	},
	prompting: function() {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the awe-inspiring ' + chalk.red('Mithril') + ' generator!'
		));

		// Prompt for user input
		var prompts = [];

		this.prompt(prompts, function(props) {
			this.props = props;
			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	writing: {
		app: function() {
			// Copy the NPM package json file
			this.fs.copy(
				this.templatePath('_package.json'),
				this.destinationPath('package.json')
			);
			// Copy the bower json file
			this.fs.copy(
				this.templatePath('_bower.json'),
				this.destinationPath('bower.json')
			);
			// Copy the gitignore file
			this.fs.copy(
				this.templatePath('gitignore'),
				this.destinationPath('.gitignore')
			);
			// Copy the webpack config file
			this.fs.copy(
				this.templatePath('_webpack.config.js'),
				this.destinationPath('webpack.config.js')
			);
			// Copy the source folder
			this.fs.copy(
				this.templatePath('src/**/*'),
				this.destinationPath('src')
			);
			// Copy index file and fill in our values
			this.fs.copyTpl(
				this.templatePath('src/index.html'),
				this.destinationPath('src/index.html'),
				{ appname: this.appname || 'Untitled' }
			);
			// Copy the gitkeep files
			this.fs.copy(
				this.templatePath('src/**/.gitkeep'),
				this.destinationPath('src')
			);
		},

		projectfiles: function() {
			this.fs.copy(
				this.templatePath('editorconfig'),
				this.destinationPath('.editorconfig')
			);
			this.fs.copy(
				this.templatePath('jshintrc'),
				this.destinationPath('.jshintrc')
			);
		}
	},

	install: function() {
		// Install required node and bower dependencies
		this.installDependencies();
	}
});