// features/support/world.js

var zombie = require('zombie'),
  HTML5  = require('html5'),
  should = require('should');

var World = function World(callback) {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.page = function(path){
    return "http://localhost:9001" + path;
  };

  this.visit = function(path, callback){
    this.browser.visit( this.page(path), function(err, browser, status){
      callback(err, browser, status);
    });
  };

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;