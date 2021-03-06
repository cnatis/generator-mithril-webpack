'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var util = require('../../utilities/util');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('componentName', {
			desc: 'New Mithril component name',
			type: String, 
			optional: false,
			required: true
		});
	},
	prompting: function() {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log('Welcome to the awe-inspiring Mithril generator!');

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
			this.componentName = _.camelCase(this.componentName);
			// Copy the model file to the project
			this.fs.copy(
				this.templatePath('component/**/*'),
				this.destinationPath('src/components/' + this.componentName)
			);

			// Insert our style import into the project
			var styleHook = '/*===== yeoman component hook =====*/';
		
			// Get out insert code ready to be inserted into the project
			var styleSource = this.destinationPath('src/style/index.scss');
			var styleInsert = "@import '../components/" + this.componentName + "/style.scss';"

			// Write out the new contents to the file system
			util.insertStringHook.call(this, styleHook, styleSource, styleInsert, '\n');
		}
	}
});