/*global $, window, CanvasLoader, jQuery, alert, require */
/*jslint browser:true, devel:true, unused:false */

// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['app'],

  paths: {
    // JavaScript folders.
    plugins: 'js/plugins',

    // Libraries.
    jquery: '../resources/vendor/jquery/jquery',

  },

  shim: {

  }

});