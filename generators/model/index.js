'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('modelName', {
			desc: 'New Mithril model name',
			type: String, 
			optional: false,
			required: true
		});
		
		// Options
		this.option('baseUrl');
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
			this.modelName = _.camelCase(this.modelName);

			// Copy the model file to the project
			this.fs.copyTpl(
				this.templatePath('model.js'),
				this.destinationPath('src/models/' + this.modelName + '.js'),
				{ url: this.options.baseUrl || '' }
			);

			// // Get the source code for the model index file so we can create an AST
			// var srcCode = this.fs.read(this.destinationPath('src/models/index.js'));
			
			// // Parse the source code into an AST
			// var srcAst = esprima.parse(srcCode, {
			// 	sourceType: 'module'
			// });

			// // Add our import declaration to the model index
			// srcAst.body.unshift(
			// 	esprima.parse('import ' + this.modelName + " from './" + this.modelName + "'", {
			// 		sourceType: 'module'
			// 	})
			// );

	  //       // Find the export declaration
	  //       var exportDeclaration = srcAst.body.filter(function(treeItem) {
	  //       	return (treeItem.type == 'ExportDefaultDeclaration');
	  //       }).pop();
	  //       // If we found one then lets add our new model to the exported object
	  //       if(exportDeclaration) {
	  //       	exportDeclaration.declaration.properties.push({
	  //       		"type": "Property",
   //                  "key": {
   //                      "type": "Identifier",
   //                      "name": this.modelName
   //                  },
   //                  "value": {
   //                      "type": "Identifier",
   //                      "value": this.modelName,
   //                      // This is a hack to stop escodegen from outputting undefined
   //                      'x-verbatim-property': this.modelName
   //                  },
   //                  "kind": "init"
	  //       	});
	  //       }
	        
			// // Generate the end result
			// var resultCode = escodegen.generate(srcAst, {
			// 	// This is a hack to stop escodegen from outputting undefined
			// 	verbatim: 'x-verbatim-property'
			// });

			// // Write out the new contents to the file system
			// this.fs.write(this.destinationPath('src/models/index.js'), resultCode);
		}
	}
});