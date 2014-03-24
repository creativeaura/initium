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
};

module.exports = myStepDefinitionsWrapper;