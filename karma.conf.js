module.exports = function(karma) {
  karma.configure({
    // base path, that will be used to resolve files and exclude
    basePath: '.',

    //load jasmine (this replaces JASMINE and JASMINE_ADAPTER file references)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'tests/unit/**/*.spec.js'
    ],

    // List of files/patterns to exclude from loaded files.
    exclude: [],

    //use phantomJS as a browser
    browsers: ['PhantomJS', 'Firefox'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 5000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: true,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    //load the needed plugins (according to karma docs, this should not be needed tho)
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],
    // Enable or disable colors in the output (reporters and logs).
    colors: true

  });
};