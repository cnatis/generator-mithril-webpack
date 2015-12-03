'use strict';
var yeoman = require('yeoman-generator');
var util = require('../../utilities/util');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);
	},
	prompting: function() {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log('Welcome to the awe-inspiring Mithril generator!');

		// Let the user know this generator will create a new directory
		this.log('INFO: This generator will create a new directory for your project with the provided project name.');

		var prompts = [];

		// Prompt user for project name
		prompts.push({
			type: 'input',
			name: 'projectName',
			message: 'What is the name of your project?',
			validate: function(result) {
				if(result.toString().trim().length > 0) {
					return true;
					// TODO: Check if the folder exists, we dont want to overwrite folders
					// if(this.fs.exists(this.destinationPath(result)) == false) {
					// 	return true;
					// } else {
					// 	return 'Directory ' + this.destinationPath(result) + ' already exists!';
					// }
				}
				return 'Please enter a name for your project.';
			}.bind(this)
		});

		// Prompt user for Bootstrap inclusion
		prompts.push({
			type: 'confirm',
			name: 'useBootstrap',
			message: 'Would you like to use Bootstrap in your project?',
			default: false
		});

		// Prompt user for jQuery inclusion
		prompts.push({
			type: 'confirm',
			name: 'useJQuery',
			message: 'Would you like to use jQuery in your project?',
			default: false,
			when: function(answers) {
				// Check if we are including Bootstrap
				// Since Bootstrap requires jQuery we don't need to
				// ask if we are already including Bootstrap
				return (answers.useBootstrap == false);
			}
		});
		
		// Prompt user for Git repo creation
		prompts.push({
			type: 'confirm',
			name: 'useGit',
			message: 'Would you like us to setup a Git repo for you?',
			default: false
		});

		this.prompt(prompts, function(answer) {
			this.promptResults = answer;
			// Set the destination root to the provided project name
			this.destinationRoot(this.promptResults.projectName);
			done();
		}.bind(this));
	},

	writing: {
		configFiles: function() {
			// Copy the NPM package json file
			this.fs.copyTpl(
				this.templatePath('_package.json'),
				this.destinationPath('package.json'),
				{ projectName: this.promptResults.projectName || 'Untitled' }
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
			// Copy the webpack production config file
			this.fs.copy(
				this.templatePath('_webpack.production.config.js'),
				this.destinationPath('webpack.production.config.js')
			);
			// Copy the gitkeep files
			this.fs.copy(
				this.templatePath('src/**/.gitkeep'),
				this.destinationPath('src')
			);
			this.fs.copy(
				this.templatePath('editorconfig'),
				this.destinationPath('.editorconfig')
			);
			this.fs.copy(
				this.templatePath('jshintrc'),
				this.destinationPath('.jshintrc')
			);
		},
		projectfiles: function() {
			// Copy the source folder
			this.fs.copy(
				this.templatePath('src/**/*'),
				this.destinationPath('src')
			);
			// Copy index file and fill in our values
			this.fs.copyTpl(
				this.templatePath('src/index.html'),
				this.destinationPath('src/index.html'),
				{ projectName: this.promptResults.projectName || 'Untitled' }
			);
		},
		bootstrap: function() {
			if(this.promptResults.useBootstrap) {
				function updateWebpackConfig(isProduction) {
					// Update the webpack config file
					// Hook is the comment we use to find out insert point
					var entryHook = '/*===== yeoman entry hook =====*/';
					var loaderHook = /\/\*===== yeoman sass hook start =====\*\/[[:ascii:]]*\/\*===== yeoman sass hook end =====\*\//;
					var webpackFileName = (isProduction ? 'webpack.production.config.js' : 'webpack.config.js');
					
					// Add a new webpack entry
					var source = this.destinationPath(webpackFileName);
					var insert = this.templatePath('bootstrap/bootstrapEntry.js');
					util.insertFileHook.call(this, entryHook, source, insert, '\n\t\t');

					// Change the loaders to work with bootstrap
					var insert = this.templatePath('bootstrap/bootstrapLoader.js');
					util.replaceFileHook.call(this, loaderHook, source, insert);
				}

				// Update dev config
				updateWebpackConfig.call(this, false);
				// Update production config
				updateWebpackConfig.call(this, true);

				// Copy the bootstrap config files to the project
				this.fs.copy(
					this.templatePath('bootstrap/bootstrap-sass.config.js'),
					this.destinationPath('bootstrap-sass.config.js')
				);
				this.fs.copy(
					this.templatePath('bootstrap/bootstrap-sass.config.scss'),
					this.destinationPath('bootstrap-sass.config.scss')
				);
				this.fs.copy(
					this.templatePath('bootstrap/style/_bootstrap-customizations.scss'),
					this.destinationPath('src/style/_bootstrap-customizations.scss')
				);
				this.fs.copy(
					this.templatePath('bootstrap/style/_pre-bootstrap-customizations.scss'),
					this.destinationPath('src/style/_pre-bootstrap-customizations.scss')
				);
			} else {
				// If we arent using boot strap we need to make the entry point require our style sheet
				var styleRequireHook = '/*===== yeoman style require hook =====*/';

				// Get our insert code ready to be inserted into the project
				var source = this.fs.read(this.destinationPath('src/index.js'));
				var insert = "require('./style/index.scss');"

				// Write out the new contents to the file system
				if(source.indexOf(insert) < 0)
					this.fs.write(this.destinationPath('src/index.js'), source.replace(styleRequireHook, insert));
			}
		},
		jQuery: function() {
			if(this.promptResults.useBootstrap) {
				// Hook is the comment we use to find out insert point
				var providePluginHook = '/*===== yeoman provide plugin hook =====*/';

				// Get our insert code ready to be inserted into the project
				var source = this.destinationPath('webpack.config.js');
				var insert = this.templatePath('jquery/jqueryProvidePlugin.js');
				util.insertFileHook.call(this, providePluginHook, source, insert, '\n\t\t\t');

				source = this.destinationPath('webpack.production.config.js');
				util.insertFileHook.call(this, providePluginHook, source, insert, '\n\t\t\t');
			}
		}
	},

	install: function() {
		// Init git repo
		if(this.promptResults.useGit) {
			// TODO: This is ugly and will need to be fixed at some point!
			this.spawnCommand('git', ['init']).on('close', function() {
				this.spawnCommand('git', ['add', '.']).on('close', function() {
					this.spawnCommand('git', ['commit', '-m', '"Initial Commit"']);
				}.bind(this));
			}.bind(this));
		}

		var optionalDependencies = [];
		// Install Bootstrap SASS
		if(this.promptResults.useBootstrap) {
			optionalDependencies.push('bootstrap-sass');
			optionalDependencies.push('bootstrap-sass-loader');
		}
		// Install jQuery
		if(this.promptResults.useBootstrap || this.promptResults.useJQuery) {
			optionalDependencies.push('jquery');
		}

		// Install dependencies
		this.npmInstall(optionalDependencies);
		this.installDependencies({
			npm: true,
			bower: false
		});
	}
});