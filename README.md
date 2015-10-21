# generator-mithril-webpack [![Build Status](https://secure.travis-ci.org/cnatis/generator-mithril-webpack.png?branch=master)](https://travis-ci.org/cnatis/generator-mithril-webpack)

[![Join the chat at https://gitter.im/cnatis/generator-mithril-webpack](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cnatis/generator-mithril-webpack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-mithril-webpack from npm, run:

```bash
npm install -g generator-mithril-webpack
```

Finally, initiate the generator:

```bash
yo mithril-webpack
```

### Mithril WebPack Generator Usage
#### Base App Generator

```bash
yo mithril-webpack [<appname>]
```

This generator will create the base application structure for use with this CLI tool.

#####Arguments:
[optional] appname

The name of the application as well as the folder this application will be created in.
This is optional and if run without the appname argument the generator will scaffold the app in the current directory.

#### Component Generator

```bash
yo mithril-webpack:component <componentName>
```

This generator will create a component for you using the current directory as the project.

#####Arguments:
componentName

The name of the component will determine the folder name used to hold the components files.

#### Model Generator

```bash
yo mithril-webpack:model <modelName>
```

This generator will create a model file for you using the current directory as the project.

#####Arguments:
modelName

The name of the model will determine the file name of the model

#####Options:
--baseUrl

The base url used for all model requests.

#### Route Generator

```bash
yo mithril-webpack:route <newRoute>
```

This generator will create a view and add it to the applications routes.

#####Arguments:
newRoute

The route url for this view. For example "/profile/new".

#####Options:
--default

Passing the default flag will set this route as the default route at url "/"

## License

MIT
