
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
})('C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js', [1,2,3,4,5,7,9,12,20,27,30,35,37,38,41,48,50,51,53,54,63,69,70,71,78,81,82,56,58], {"51_50_2":0,"51_55_13":0,"55_7_7":0,"74_6_26":0,"85_6_31":0}, ["'use strict';","var yeoman = require('yeoman-generator');","var chalk = require('chalk');","var yosay = require('yosay');","var _ = require('lodash');","","module.exports = yeoman.generators.Base.extend({","\tconstructor: function() {","\t\tyeoman.generators.Base.apply(this, arguments);","","\t\t// Arguments","\t\tthis.argument('newRoute', {","\t\t\tdesc: 'New route path ie. \"/profile/new\"',","\t\t\ttype: String, ","\t\t\toptional: false,","\t\t\trequired: true","\t\t});","","\t\t// Options","\t\tthis.option('default', {","\t\t\tdesc: 'Set this route as the \"default\" route at url \"/\"',","\t\t\talias: 'd',","\t\t\ttype: Boolean","\t\t});","\t},","\tprompting: function() {","\t\tvar done = this.async();","","\t\t// Have Yeoman greet the user.","\t\tthis.log(yosay(","\t\t\t'Welcome to the awe-inspiring ' + chalk.red('Mithril') + ' generator!'","\t\t));","","\t\t// Prompt for user input","\t\tvar prompts = [];","","\t\tthis.prompt(prompts, function(props) {","\t\t\tthis.props = props;","\t\t\t// To access props later use this.props.someOption;","","\t\t\tdone();","\t\t}.bind(this));","\t},","","\twriting: {","\t\tapp: function() {","\t\t\t// Hook is the comment we use to find out insert point","\t\t\tvar hook = '/*===== yeoman hook =====*/';","\t\t\t// Remove preceding and trailing slashes","\t\t\tthis.newRoute = this.newRoute.replace(/^\\/|\\/$/g, '');","\t\t\tvar finalRoute = '/' + (this.options.default ? '' : this.newRoute);","\t\t\t// Split the route path so we can camel case it for use in the file system","\t\t\tvar routeArray = this.newRoute.split('/');","\t\t\tvar ccRoutePath = routeArray.reduce(function(result, current, idx) {","\t\t\t\tif(idx > 0) {","\t\t\t\t\treturn result + '/' + _.camelCase(current);","\t\t\t\t} else {","\t\t\t\t\treturn _.camelCase(current);","\t\t\t\t}","\t\t\t}, '');","","\t\t\t// Copy the view template to the project","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('module/**/*'),","\t\t\t\tthis.destinationPath('src/modules/' + ccRoutePath)","\t\t\t);","","\t\t\t// Get out insert code ready to be inserted into the project","\t\t\tvar source = this.fs.read(this.destinationPath('src/index.js'));","\t\t\tvar insert = this.fs.read(this.templatePath('routeInsert.js'));","\t\t\tinsert = insert.replace(/###newRouteURL###/g, finalRoute).replace(/###newRoutePath###/g, './modules/' + ccRoutePath);","","\t\t\t// Write out the new contents to the file system","\t\t\tif(source.indexOf(insert) < 0)","\t\t\t\tthis.fs.write(this.destinationPath('src/index.js'), source.replace(hook, insert + '\\n\\t' + hook));","","\t\t\t// Insert our style import into the project","\t\t\tvar styleHook = '/*===== yeoman module hook =====*/';","\t\t","\t\t\t// Get out insert code ready to be inserted into the project","\t\t\tvar styleSource = this.fs.read(this.destinationPath('src/style/index.scss'));","\t\t\tvar styleInsert = \"@import '../modules/\" + ccRoutePath + \"/style.scss';\"","","\t\t\t// Write out the new contents to the file system","\t\t\tif(styleSource.indexOf(insert) < 0)","\t\t\t\tthis.fs.write(this.destinationPath('src/style/index.scss'), styleSource.replace(styleHook, styleHook + '\\n' + styleInsert));","\t\t}","\t}","});"]);
_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 1);

"use strict";

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 2);

var yeoman = require("yeoman-generator");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 3);

var chalk = require("chalk");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 4);

var yosay = require("yosay");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 5);

var _ = require("lodash");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 7);

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 9);
        yeoman.generators.Base.apply(this, arguments);
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 12);
        // Arguments
        this.argument("newRoute", {
            desc: 'New route path ie. "/profile/new"',
            type: String,
            optional: false,
            required: true
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 20);
        // Options
        this.option("default", {
            desc: 'Set this route as the "default" route at url "/"',
            alias: "d",
            type: Boolean
        });
    },
    prompting: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 27);
        var done = this.async();
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 30);
        // Have Yeoman greet the user.
        this.log(yosay("Welcome to the awe-inspiring " + chalk.red("Mithril") + " generator!"));
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 35);
        // Prompt for user input
        var prompts = [];
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 37);
        this.prompt(prompts, function(props) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 38);
            this.props = props;
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 41);
            // To access props later use this.props.someOption;
            done();
        }.bind(this));
    },
    writing: {
        app: function() {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 48);
            // Hook is the comment we use to find out insert point
            var hook = "/*===== yeoman hook =====*/";
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 50);
            // Remove preceding and trailing slashes
            this.newRoute = this.newRoute.replace(/^\/|\/$/g, "");
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 51);
            var finalRoute = "/" + (this.options.default ? _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "cond", "51_50_2", "") : _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "cond", "51_55_13", this.newRoute));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 53);
            // Split the route path so we can camel case it for use in the file system
            var routeArray = this.newRoute.split("/");
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 54);
            var ccRoutePath = routeArray.reduce(function(result, current, idx) {
                if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "cond", "55_7_7", idx > 0)) {
                    _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 56);
                    return result + "/" + _.camelCase(current);
                } else {
                    _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 58);
                    return _.camelCase(current);
                }
            }, "");
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 63);
            // Copy the view template to the project
            this.fs.copy(this.templatePath("module/**/*"), this.destinationPath("src/modules/" + ccRoutePath));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 69);
            // Get out insert code ready to be inserted into the project
            var source = this.fs.read(this.destinationPath("src/index.js"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 70);
            var insert = this.fs.read(this.templatePath("routeInsert.js"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 71);
            insert = insert.replace(/###newRouteURL###/g, finalRoute).replace(/###newRoutePath###/g, "./modules/" + ccRoutePath);
            // Write out the new contents to the file system
            if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "cond", "74_6_26", source.indexOf(insert) < 0)) this.fs.write(this.destinationPath("src/index.js"), source.replace(hook, insert + "\n	" + hook));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 78);
            // Insert our style import into the project
            var styleHook = "/*===== yeoman module hook =====*/";
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 81);
            // Get out insert code ready to be inserted into the project
            var styleSource = this.fs.read(this.destinationPath("src/style/index.scss"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "line", 82);
            var styleInsert = "@import '../modules/" + ccRoutePath + "/style.scss';";
            // Write out the new contents to the file system
            if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/route/index.js", "cond", "85_6_31", styleSource.indexOf(insert) < 0)) this.fs.write(this.destinationPath("src/style/index.scss"), styleSource.replace(styleHook, styleHook + "\n" + styleInsert));
        }
    }
});