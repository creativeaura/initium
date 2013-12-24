/*global module*/
/*jshint camelcase: true, indent: 2  */

/*!
 * Initium
 * @author Gaurav Jassal
 */


module.exports = function (grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //
    // Create dynamic banner
    //
    info: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    //
    // Task concat files in header tag
    uglify: {
      my_target: {
        options: {

        },
        files: {
          'app/js/initium.js': ['app/resources/vendor/modernizr/modernizr.js']
        }
      }
    },

    //
    // Watch various task on file modification
    //
    watch: {
      less: {
        files:   ['app/css/less/**/*.less'],
        tasks:   ['less'],
        options: {
          spawn:      false,
          livereload: true
        }
      },
      html: {
        files:   ['app/*.html'],
        options: {
          livereload: true
        }
      },
      coffee: {
        files:   ['app/js/modules/**/*.coffee'],
        tasks:   ['coffee'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files:   ['app/js/**/*.js'],
        tasks:   ['jshint']
      },
      test: {
        files:   ['tests/unit/**/*.spec.js'],
        tasks:   ['karma']
      }
    },

    //
    // Compile all less files to single css file
    //
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
          paths:       ['app/css/less'],
          yuicompress: true
        },
        files: {
          'production/css/main.css': 'app/css/less/main.less'
        }
      }
    },

    //
    // Run local server for development with livereload
    //

    connect: {
      development: {
        options: {
          port:      9001,
          base:      'app',
          keepalive: true
        }
      },
      production: {
        options: {
          port:      9002,
          base:      'production',
          keepalive: true
        }
      }
    },

    //
    // Compile all commonjs dependencies to single bundle file.
    //

    requirejs: {
      compile: {
        options: {
          name:           'config',
          baseUrl:        'app/js',
          mainConfigFile: 'app/js/config.js',
          out:            'app/js/amd-app.js'
        }
      }
    },

    //
    // Comple all of your coffeescript file into javascript
    //

    coffee: {
      files:            ['app/js/modules/**/*.coffee'],
      glob_to_multiple: {
        expand:  true,
        flatten: true,
        cwd:     'app/js/modules/',
        src:     ['*.coffee'],
        dest:    'app/js/modules/',
        ext:     '.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['app/resources/**/*.js', 'app/js/plugins/**/*.js']
      },
      files: {
        src: ['Gruntfile.js', 'app/**/*.js']
      }
    },
    copy: {
      production: {
        files: [
          {expand: true, cwd: 'app/', src: ['**'], dest: 'production/'}
        ]
      }
    },
    usemin: {
      html: ['production/*.html']
    },

    //
    // Ftp task to deploy production to remote site
    //
    ftp: {
      build: {
        auth: {
          host: 'server.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'production',
        dest: '/path/to/destination/folder',
        exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'dist/tmp']
      }
    },

    //
    // Using grunt bump to increase the project version
    // - grunt bump:patch
    // - grunt bump:minor
    // - grunt bump:major
    // - grunt bump:build
    //
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: false,
        createTag: false,
        push: false
      }
    },

    //
    // Task to run jasmine and mocha unit tests
    // You can change various options in karma.conf.js
    //
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    //
    // Task to optimize (jpg, png and gif) images for productions
    //

    imagemin: {
      production: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['app/img/*.{png,jpg,gif}'],
          dest: 'production/img/'
        }]
      }
    },

    //
    // Task to remove files and folder not require in production
    // example less and coffeescript files
    //
    clean: {
      build: {
        src: [
          'production/css/less',
          'production/js/modules',
          'production/js/app.js',
          'production/js/config.js'
        ]
      }
    },

    //
    // Grunt task to run Google PageSpeed Insights as part of CI
    //
    pagespeed: {
      prod: {
        options: {
          url: 'http://127.0.0.1:9002',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ['/404.html', 'about.html'],
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      options: {
        key: 'API_KEY',
        url: 'https://developers.google.com'
      }
    }
  });


  // Dynamically load npm tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default',    ['jshint', 'watch']);
  grunt.registerTask('build',      ['less', 'coffee', 'uglify', 'copy:production', 'clean', 'usemin', 'imagemin']);
  grunt.registerTask('deploy',     ['less', 'coffee', 'uglify', 'copy:production', 'clean', 'usemin', 'ftp']);
  grunt.registerTask('server',     ['connect:development']);
  grunt.registerTask('production', ['connect:production']);
  grunt.registerTask('test',       ['karma:unit']);

};