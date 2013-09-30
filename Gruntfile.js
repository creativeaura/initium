/*!
 * Initium
 * @author Gaurav Jassal
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * Project banner
     * Dynamically appended to CSS/JS files
     * Inherits text from package.json
     */
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    watch: {
      less: {
        files: ['app/css/less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: ['app/*.html'],
        options: {
          livereload: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['app/css/less']
        },
        files: {
          'app/css/main.css': 'app/css/less/main.less'
        }
      },
      production: {
        options: {
          paths: ['app/css/less'],
          yuicompress: true
        },
        files: {
          'production/css/main.css': 'app/css/less/main.less'
        }
      }
    },

    connect: {
      development: {
        options: {
          port: 9001,
          base: 'app',
          keepalive: true
        }
      },
      production: {
        options: {
          port: 9002,
          base: 'production',
          keepalive: true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          name: 'config',
          baseUrl: 'app/js',
          mainConfigFile: 'app/js/config.js',
          out: 'app/js/bundle.js'
        }
      }
    }
  });


  // Dynamically load npm tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('server', ['connect:development']);
  grunt.registerTask('production', ['connect:production']);

};