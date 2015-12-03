'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var util = require('../../utilities/util');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('layoutName', {
			desc: 'New Mithril layout name',
			type: String, 
			optional: false,
			required: true
		});
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
			this.layoutName = _.camelCase(this.layoutName);
			// Copy the model file to the project
			this.fs.copy(
				this.templatePath('layout/**/*'),
				this.destinationPath('src/layouts/' + this.layoutName)
			);

			// Insert our style import into the project
			var styleHook = '/*===== yeoman component hook =====*/';
		
			// Get our insert code ready to be inserted into the project
			var styleSource = this.destinationPath('src/style/index.scss');
			var styleInsert = "@import '../layouts/" + this.layoutName + "/style.scss';"

			// Write out the new contents to the file system
			util.insertStringHook.call(this, styleHook, styleSource, styleInsert, '\n');
		}
	}
});