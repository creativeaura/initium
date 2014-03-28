// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['app'],

  paths: {
    // JavaScript folders.
    plugins: 'js/plugins',

    // Libraries.
    'jquery': '../resources/vendor/jquery/dist/jquery',
    'handlebars': '../resources/vendor/handlebars/handlebars',
    'backbone': '../resources/vendor/backbone/backbone',
    'underscore': '../resources/vendor/underscore/underscore',
    'marionette': '../resources/vendor/marionette/lib/backbone.marionette',
    'backbone-babysitter': '../resources/vendor/backbone-babysitter/lib/backbone-babysitter',
    'backbone-wreqr': '../resources/vendor/backbone-wreqr/lib/backbone-wreqr'
  },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery']
    },
    'marionette': {
      deps: ['backbone']
    }
  }

});
