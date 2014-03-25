![initium](app/img/logo.png)

[![Build Status](https://travis-ci.org/creativeaura/initium.png?branch=master)](https://travis-ci.org/creativeaura/initium)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/creativeaura/initium/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

This a project bootstrap for frontend developers to save their time they spend at the start of each project. The project gives you a well organized directory structure and various tasks to compile, test and build your project code for deployment.

## Dependencies

You will need to install some stuff, if you haven't already:


* Node.js
* Node: npm
* Bower

After you've set this stuff up please run

	$ npm install -g grunt-cli

This installs the Grunt command line tools.
Afterwards please run in your project directory.

	$ npm install

## Available Tools

- Mobile First
- GruntJS
	- Less
	- Require.js
	- CoffeeScript
	- Karma (Unit Test)
	- Jasmine
	- Mocha
	- Deployment / FTP to server
	- Livereload
	- usemin
	- JSLint
	- Google PageSpeed
- BDD (Behaviour-Driven Development tool)
	- cucumber-js
- Twitter Bootstrap 3
- HTML5 Boilerplate
- Require.js
- Less / CSS
- CSS3 Mixins
	- Animate.css
- Bower (Package Manager)

This will install all dependencies required for the project in one single command.

## Grunt

The project is using `GruntJS` to automate alot of development task to save developer time. We have added some handle grunt tasks like

This command will watch for your changes to files compile your less/css, coffeescript on file save and reload your browser automatically. It will also run your tests and other tasks like jslint.

    grunt watch

This will start a http server and server /app folder on port 9001

    grunt server

This will start a http server and server /production folder on port 9002

    grunt production

This command will compile and copy all your production files to production folder. This will also remove all files you don't need for production like less, coffesscript files.

    grunt build


## CSS

The project use [LESS](http://lesscss.org/) as a css preprocessor. LESS was designed to be as close to CSS as possible, so the syntax is identical to your current CSS code. This means you can use it right away with your existing code. We have included [Twitter Bootstrap](http://getbootstrap.com/) a powerful mobile first front-end framework for faster and easier web development. The project also includes loads of less mixins for CSS3 helpers and [Animate.css](https://daneden.me/animate/) for bunch of cool, fun, and cross-browser animations for you to use in your projects.

## JS

We have included jQuery for dom manipulation and RequireJS to organize your JavaScript code and load them asynchronously. Once you build your project all external javascript files will be compiled into one single bundle file to be used in production.

Please use JSHint for your JavaScript before you commit. You can use the Grunt-task `jshint` for this. It is also integrated in `grunt watch`.

## Unit Testing

We have included Karma as testing suite. Using karma you can run your jasmine and mocha on PhantomJS, Chomre, Safari, Firefox and IE real browsers.

By Default we are using jasmine but that can be easily changed in karma.config.js. You can also also various browser you wat to test on.

To run the test

    grunt tests

## BDD (Behaviour-Driven Development tool)

Cucumber lets software development teams describe how software should behave in plain text. The text is written in a business-readable domain-specific language and serves as documentation, automated tests and development-aid - all rolled into one format.

Install cucumber.js globally

    npm install cucumber.js -g
    cd tests
    cucumber.js features/myFeature.feature --require features/step_definitions/myStepDefinitions.js

We have included a sample test feature in this repo.

## Browser support

* Chrome
* Firefox 4+
* Internet Explorer 8+
* Opera 12+
* Safari 5+


## Contribute

Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.
