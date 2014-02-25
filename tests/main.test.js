var tests = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}

// Require.js allows us to configure shortcut alias
requirejs.config({
  baseUrl: 'base/app/js',
  paths: {
    plugins: 'app/js/plugins'

    // Libraries.
    //jquery: '../resources/vendor/jquery/jquery'

  },

  shim: {

  },
  deps: tests,
  callback: window.__karma__.start
});