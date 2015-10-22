
// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js', [1,2,3,4,6,8,11,14,19,21,24,43,51,65,72,38,30,60,73,75,76,83,89,94,99,104,108,112,119,124,134,135,139,140,148,149,156,160,164,168,174,176,177,187,190,191,211,223,224,204,205,206,214,215,219], {"29_7_35":0,"86_19_30":0,"127_19_30":0,"131_6_31":0,"143_7_26":0,"152_7_26":0,"180_7_26":0,"185_6_31":0,"194_7_26":0,"202_5_25":0,"213_5_31":0,"218_5_63":0,"218_5_31":0,"218_40_28":0}, ["'use strict';","var yeoman = require('yeoman-generator');","var chalk = require('chalk');","var yosay = require('yosay');","","module.exports = yeoman.generators.Base.extend({","\tconstructor: function() {","\t\tyeoman.generators.Base.apply(this, arguments);","\t},","\tprompting: function() {","\t\tvar done = this.async();","","\t\t// Have Yeoman greet the user.","\t\tthis.log(yosay(","\t\t\t'Welcome to the awe-inspiring ' + chalk.red('Mithril') + ' generator!'","\t\t));","","\t\t// Let the user know this generator will create a new directory","\t\tthis.log('INFO: This generator will create a new directory for your project with the provided project name.');","","\t\tvar prompts = [];","","\t\t// Prompt user for project name","\t\tprompts.push({","\t\t\ttype: 'input',","\t\t\tname: 'projectName',","\t\t\tmessage: 'What is the name of your project?',","\t\t\tvalidate: function(result) {","\t\t\t\tif(result.toString().trim().length > 0) {","\t\t\t\t\treturn true;","\t\t\t\t\t// TODO: Check if the folder exists, we dont want to overwrite folders","\t\t\t\t\t// if(this.fs.exists(this.destinationPath(result)) == false) {","\t\t\t\t\t// \treturn true;","\t\t\t\t\t// } else {","\t\t\t\t\t// \treturn 'Directory ' + this.destinationPath(result) + ' already exists!';","\t\t\t\t\t// }","\t\t\t\t}","\t\t\t\treturn 'Please enter a name for your project.';","\t\t\t}.bind(this)","\t\t});","","\t\t// Prompt user for Bootstrap inclusion","\t\tprompts.push({","\t\t\ttype: 'confirm',","\t\t\tname: 'useBootstrap',","\t\t\tmessage: 'Would you like to use Bootstrap in your project?',","\t\t\tdefault: false","\t\t});","","\t\t// Prompt user for jQuery inclusion","\t\tprompts.push({","\t\t\ttype: 'confirm',","\t\t\tname: 'useJQuery',","\t\t\tmessage: 'Would you like to use jQuery in your project?',","\t\t\tdefault: false,","\t\t\twhen: function(answers) {","\t\t\t\t// Check if we are including Bootstrap","\t\t\t\t// Since Bootstrap requires jQuery we don't need to","\t\t\t\t// ask if we are already including Bootstrap","\t\t\t\treturn (answers.useBootstrap == false);","\t\t\t}","\t\t});","\t\t","\t\t// Prompt user for Git repo creation","\t\tprompts.push({","\t\t\ttype: 'confirm',","\t\t\tname: 'useGit',","\t\t\tmessage: 'Would you like us to setup a Git repo for you?',","\t\t\tdefault: false","\t\t});","","\t\tthis.prompt(prompts, function(answer) {","\t\t\tthis.promptResults = answer;","\t\t\t// Set the destination root to the provided project name","\t\t\tthis.destinationRoot(this.promptResults.projectName);","\t\t\tdone();","\t\t}.bind(this));","\t},","","\twriting: {","\t\tconfigFiles: function() {","\t\t\t// Copy the NPM package json file","\t\t\tthis.fs.copyTpl(","\t\t\t\tthis.templatePath('_package.json'),","\t\t\t\tthis.destinationPath('package.json'),","\t\t\t\t{ projectName: this.promptResults.projectName || 'Untitled' }","\t\t\t);","\t\t\t// Copy the bower json file","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('_bower.json'),","\t\t\t\tthis.destinationPath('bower.json')","\t\t\t);","\t\t\t// Copy the gitignore file","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('gitignore'),","\t\t\t\tthis.destinationPath('.gitignore')","\t\t\t);","\t\t\t// Copy the webpack config file","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('_webpack.config.js'),","\t\t\t\tthis.destinationPath('webpack.config.js')","\t\t\t);","\t\t\t// Copy the gitkeep files","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('src/**/.gitkeep'),","\t\t\t\tthis.destinationPath('src')","\t\t\t);","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('editorconfig'),","\t\t\t\tthis.destinationPath('.editorconfig')","\t\t\t);","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('jshintrc'),","\t\t\t\tthis.destinationPath('.jshintrc')","\t\t\t);","\t\t},","\t\tprojectfiles: function() {","\t\t\t// Copy the source folder","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('src/**/*'),","\t\t\t\tthis.destinationPath('src')","\t\t\t);","\t\t\t// Copy index file and fill in our values","\t\t\tthis.fs.copyTpl(","\t\t\t\tthis.templatePath('src/index.html'),","\t\t\t\tthis.destinationPath('src/index.html'),","\t\t\t\t{ projectName: this.promptResults.projectName || 'Untitled' }","\t\t\t);","\t\t},","\t\tbootstrap: function() {","\t\t\tif(this.promptResults.useBootstrap) {","\t\t\t\t// Update the webpack config file","\t\t\t\t// Hook is the comment we use to find out insert point","\t\t\t\tvar entryHook = '/*===== yeoman entry hook =====*/';","\t\t\t\tvar loaderHook = /\\/\\*===== yeoman sass hook start =====\\*\\/[[:ascii:]]*\\/\\*===== yeoman sass hook end =====\\*\\//;","","\t\t\t\t// Add a new webpack entry","\t\t\t\t// Get our insert code ready to be inserted into the project","\t\t\t\tvar source = this.fs.read(this.destinationPath('webpack.config.js'));","\t\t\t\tvar insert = this.fs.read(this.templatePath('bootstrap/bootstrapEntry.js'));","","\t\t\t\t// Write out the new contents to the file system","\t\t\t\tif(source.indexOf(insert) < 0)","\t\t\t\t\tthis.fs.write(this.destinationPath('webpack.config.js'), source.replace(entryHook, insert + '\\n\\t' + entryHook));","","\t\t\t\t// Change the loaders to work with bootstrap","\t\t\t\t// Get our insert code ready to be inserted into the project","\t\t\t\tvar source = this.fs.read(this.destinationPath('webpack.config.js'));","\t\t\t\tvar insert = this.fs.read(this.templatePath('bootstrap/bootstrapLoader.js'));","","\t\t\t\t// Write out the new contents to the file system","\t\t\t\tif(source.indexOf(insert) < 0)","\t\t\t\t\tthis.fs.write(this.destinationPath('webpack.config.js'), source.replace(loaderHook, insert));","","\t\t\t\t// Copy the bootstrap config files to the project","\t\t\t\tthis.fs.copy(","\t\t\t\t\tthis.templatePath('bootstrap/bootstrap-sass.config.js'),","\t\t\t\t\tthis.destinationPath('bootstrap-sass.config.js')","\t\t\t\t);","\t\t\t\tthis.fs.copy(","\t\t\t\t\tthis.templatePath('bootstrap/bootstrap-sass.config.scss'),","\t\t\t\t\tthis.destinationPath('bootstrap-sass.config.scss')","\t\t\t\t);","\t\t\t\tthis.fs.copy(","\t\t\t\t\tthis.templatePath('bootstrap/style/_bootstrap-customizations.scss'),","\t\t\t\t\tthis.destinationPath('src/style/_bootstrap-customizations.scss')","\t\t\t\t);","\t\t\t\tthis.fs.copy(","\t\t\t\t\tthis.templatePath('bootstrap/style/_pre-bootstrap-customizations.scss'),","\t\t\t\t\tthis.destinationPath('src/style/_pre-bootstrap-customizations.scss')","\t\t\t\t);","\t\t\t} else {","\t\t\t\t// If we arent using boot strap we need to make the entry point require our style sheet","\t\t\t\tvar styleRequireHook = '/*===== yeoman style require hook =====*/';","\t\t\t\t// Get our insert code ready to be inserted into the project","\t\t\t\tvar source = this.fs.read(this.destinationPath('src/index.js'));","\t\t\t\tvar insert = \"require('./style/index.scss');\"","","\t\t\t\t// Write out the new contents to the file system","\t\t\t\tif(source.indexOf(insert) < 0)","\t\t\t\t\tthis.fs.write(this.destinationPath('webpack.config.js'), source.replace(styleRequireHook, insert));","\t\t\t}","\t\t},","\t\tjQuery: function() {","\t\t\tif(this.promptResults.useBootstrap) {","\t\t\t\t// Hook is the comment we use to find out insert point","\t\t\t\tvar providePluginHook = '/*===== yeoman provide plugin hook =====*/';","","\t\t\t\t// Get our insert code ready to be inserted into the project","\t\t\t\tvar source = this.fs.read(this.destinationPath('webpack.config.js'));","\t\t\t\tvar insert = this.fs.read(this.templatePath('jquery/jqueryProvidePlugin.js'));","","\t\t\t\t// Write out the new contents to the file system","\t\t\t\tif(source.indexOf(insert) < 0)","\t\t\t\t\tthis.fs.write(this.destinationPath('webpack.config.js'), source.replace(providePluginHook, insert + '\\n\\t' + providePluginHook));","\t\t\t}","\t\t}","\t},","","\tinstall: function() {","\t\t// Init git repo","\t\tif(this.promptResults.useGit) {","\t\t\t// TODO: This is ugly and will need to be fixed at some point!","\t\t\tthis.spawnCommand('git', ['init']).on('close', function() {","\t\t\t\tthis.spawnCommand('git', ['add', '.']).on('close', function() {","\t\t\t\t\tthis.spawnCommand('git', ['commit', '-m', '\"Initial Commit\"']);","\t\t\t\t}.bind(this));","\t\t\t}.bind(this));","\t\t}","","\t\tvar optionalDependencies = [];","\t\t// Install Bootstrap SASS","\t\tif(this.promptResults.useBootstrap) {","\t\t\toptionalDependencies.push('bootstrap-sass');","\t\t\toptionalDependencies.push('bootstrap-sass-loader');","\t\t}","\t\t// Install jQuery","\t\tif(this.promptResults.useBootstrap || this.promptResults.useJQuery) {","\t\t\toptionalDependencies.push('jquery');","\t\t}","","\t\t// Install dependencies","\t\tthis.npmInstall(optionalDependencies);","\t\tthis.installDependencies({","\t\t\tnpm: true,","\t\t\tbower: false","\t\t});","\t}","});"]);
_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 1);

"use strict";

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 2);

var yeoman = require("yeoman-generator");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 3);

var chalk = require("chalk");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 4);

var yosay = require("yosay");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 6);

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 8);
        yeoman.generators.Base.apply(this, arguments);
    },
    prompting: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 11);
        var done = this.async();
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 14);
        // Have Yeoman greet the user.
        this.log(yosay("Welcome to the awe-inspiring " + chalk.red("Mithril") + " generator!"));
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 19);
        // Let the user know this generator will create a new directory
        this.log("INFO: This generator will create a new directory for your project with the provided project name.");
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 21);
        var prompts = [];
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 24);
        // Prompt user for project name
        prompts.push({
            type: "input",
            name: "projectName",
            message: "What is the name of your project?",
            validate: function(result) {
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "29_7_35", result.toString().trim().length > 0)) {
                    _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 30);
                    return true;
                }
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 38);
                return "Please enter a name for your project.";
            }.bind(this)
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 43);
        // Prompt user for Bootstrap inclusion
        prompts.push({
            type: "confirm",
            name: "useBootstrap",
            message: "Would you like to use Bootstrap in your project?",
            "default": false
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 51);
        // Prompt user for jQuery inclusion
        prompts.push({
            type: "confirm",
            name: "useJQuery",
            message: "Would you like to use jQuery in your project?",
            "default": false,
            when: function(answers) {
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 60);
                // Check if we are including Bootstrap
                // Since Bootstrap requires jQuery we don't need to
                // ask if we are already including Bootstrap
                return answers.useBootstrap == false;
            }
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 65);
        // Prompt user for Git repo creation
        prompts.push({
            type: "confirm",
            name: "useGit",
            message: "Would you like us to setup a Git repo for you?",
            "default": false
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 72);
        this.prompt(prompts, function(answer) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 73);
            this.promptResults = answer;
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 75);
            // Set the destination root to the provided project name
            this.destinationRoot(this.promptResults.projectName);
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 76);
            done();
        }.bind(this));
    },
    writing: {
        configFiles: function() {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 83);
            // Copy the NPM package json file
            this.fs.copyTpl(this.templatePath("_package.json"), this.destinationPath("package.json"), {
                projectName: _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "86_19_30", this.promptResults.projectName) || "Untitled"
            });
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 89);
            // Copy the bower json file
            this.fs.copy(this.templatePath("_bower.json"), this.destinationPath("bower.json"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 94);
            // Copy the gitignore file
            this.fs.copy(this.templatePath("gitignore"), this.destinationPath(".gitignore"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 99);
            // Copy the webpack config file
            this.fs.copy(this.templatePath("_webpack.config.js"), this.destinationPath("webpack.config.js"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 104);
            // Copy the gitkeep files
            this.fs.copy(this.templatePath("src/**/.gitkeep"), this.destinationPath("src"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 108);
            this.fs.copy(this.templatePath("editorconfig"), this.destinationPath(".editorconfig"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 112);
            this.fs.copy(this.templatePath("jshintrc"), this.destinationPath(".jshintrc"));
        },
        projectfiles: function() {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 119);
            // Copy the source folder
            this.fs.copy(this.templatePath("src/**/*"), this.destinationPath("src"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 124);
            // Copy index file and fill in our values
            this.fs.copyTpl(this.templatePath("src/index.html"), this.destinationPath("src/index.html"), {
                projectName: _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "127_19_30", this.promptResults.projectName) || "Untitled"
            });
        },
        bootstrap: function() {
            if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "131_6_31", this.promptResults.useBootstrap)) {
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 134);
                // Update the webpack config file
                // Hook is the comment we use to find out insert point
                var entryHook = "/*===== yeoman entry hook =====*/";
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 135);
                var loaderHook = /\/\*===== yeoman sass hook start =====\*\/[[:ascii:]]*\/\*===== yeoman sass hook end =====\*\//;
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 139);
                // Add a new webpack entry
                // Get our insert code ready to be inserted into the project
                var source = this.fs.read(this.destinationPath("webpack.config.js"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 140);
                var insert = this.fs.read(this.templatePath("bootstrap/bootstrapEntry.js"));
                // Write out the new contents to the file system
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "143_7_26", source.indexOf(insert) < 0)) this.fs.write(this.destinationPath("webpack.config.js"), source.replace(entryHook, insert + "\n	" + entryHook));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 148);
                // Change the loaders to work with bootstrap
                // Get our insert code ready to be inserted into the project
                var source = this.fs.read(this.destinationPath("webpack.config.js"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 149);
                var insert = this.fs.read(this.templatePath("bootstrap/bootstrapLoader.js"));
                // Write out the new contents to the file system
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "152_7_26", source.indexOf(insert) < 0)) this.fs.write(this.destinationPath("webpack.config.js"), source.replace(loaderHook, insert));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 156);
                // Copy the bootstrap config files to the project
                this.fs.copy(this.templatePath("bootstrap/bootstrap-sass.config.js"), this.destinationPath("bootstrap-sass.config.js"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 160);
                this.fs.copy(this.templatePath("bootstrap/bootstrap-sass.config.scss"), this.destinationPath("bootstrap-sass.config.scss"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 164);
                this.fs.copy(this.templatePath("bootstrap/style/_bootstrap-customizations.scss"), this.destinationPath("src/style/_bootstrap-customizations.scss"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 168);
                this.fs.copy(this.templatePath("bootstrap/style/_pre-bootstrap-customizations.scss"), this.destinationPath("src/style/_pre-bootstrap-customizations.scss"));
            } else {
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 174);
                // If we arent using boot strap we need to make the entry point require our style sheet
                var styleRequireHook = "/*===== yeoman style require hook =====*/";
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 176);
                // Get our insert code ready to be inserted into the project
                var source = this.fs.read(this.destinationPath("src/index.js"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 177);
                var insert = "require('./style/index.scss');";
                // Write out the new contents to the file system
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "180_7_26", source.indexOf(insert) < 0)) this.fs.write(this.destinationPath("webpack.config.js"), source.replace(styleRequireHook, insert));
            }
        },
        jQuery: function() {
            if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "185_6_31", this.promptResults.useBootstrap)) {
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 187);
                // Hook is the comment we use to find out insert point
                var providePluginHook = "/*===== yeoman provide plugin hook =====*/";
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 190);
                // Get our insert code ready to be inserted into the project
                var source = this.fs.read(this.destinationPath("webpack.config.js"));
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 191);
                var insert = this.fs.read(this.templatePath("jquery/jqueryProvidePlugin.js"));
                // Write out the new contents to the file system
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "194_7_26", source.indexOf(insert) < 0)) this.fs.write(this.destinationPath("webpack.config.js"), source.replace(providePluginHook, insert + "\n	" + providePluginHook));
            }
        }
    },
    install: function() {
        // Init git repo
        if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "202_5_25", this.promptResults.useGit)) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 204);
            // TODO: This is ugly and will need to be fixed at some point!
            this.spawnCommand("git", [ "init" ]).on("close", function() {
                _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 205);
                this.spawnCommand("git", [ "add", "." ]).on("close", function() {
                    _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 206);
                    this.spawnCommand("git", [ "commit", "-m", '"Initial Commit"' ]);
                }.bind(this));
            }.bind(this));
        }
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 211);
        var optionalDependencies = [];
        // Install Bootstrap SASS
        if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "213_5_31", this.promptResults.useBootstrap)) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 214);
            optionalDependencies.push("bootstrap-sass");
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 215);
            optionalDependencies.push("bootstrap-sass-loader");
        }
        // Install jQuery
        if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "218_5_63", _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "218_5_31", this.promptResults.useBootstrap) || _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "cond", "218_40_28", this.promptResults.useJQuery))) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 219);
            optionalDependencies.push("jquery");
        }
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 223);
        // Install dependencies
        this.npmInstall(optionalDependencies);
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/app/index.js", "line", 224);
        this.installDependencies({
            npm: true,
            bower: false
        });
    }
});