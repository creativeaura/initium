// features/step_definitions/myStepDefinitions.js

var myStepDefinitionsWrapper = function() {
  this.World = require("../support/initium.js").World;

  this.Given(/^I am on home page$/, function(callback) {
    // express the regexp above with the code you wish you had
    this.visit('/', callback);
  });

  this.When(/^I visit the page$/, function(callback) {
    // express the regexp above with the code you wish you had
    this.visit('/index.html', callback);
  });

  this.Then(/^I should see "([^"]*)" as the page title$/, function(arg1, callback) {
    var pageTitle = this.browser.text('title');
    if (arg1 === pageTitle) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + arg1));
    }

  });

  this.Given(/^I am on the home page$/, function (callback) {
    this.visit('/', callback);
  });

  this.When(/^I visit "([^"]*)" page$/, function (arg1, callback) {
    this.visit('/' + arg1, callback);
  });

  this.Then(/^I should see "([^"]*)" in the list of available tools$/, function (arg1, callback) {
    var list = this.browser.text('#tools');
    if(list.indexOf(arg1) !== -1) {
      callback();
    } else {
      callback.fail(new Error("Can't find " + arg1 + " in the available tools"));
    }
  });
};

module.exports = myStepDefinitionsWrapper;