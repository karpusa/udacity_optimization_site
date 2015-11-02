module.exports = function (grunt) {
    grunt.initConfig({

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    server: './'
                }
            }
        },

        cssmin: {
          prod: {
            files: [{
              expand: true,
              cwd: 'css',
              src: '*.css',
              dest: 'css/prod',
              ext: '.css'
            }]
          }
        },

        uglify: {
            prod: {
              files: [{
                  expand: true,
                  cwd: 'js',
                  src: '*.js',
                  dest: 'js/prod'
              }]
            }
        },

        imagemin: {                          // Task
            prod: {                         // Another target
              files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'img',                   // Src matches are relative to this path
                src: ['*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'img/prod/'                  // Destination path prefix
              }]
            }
        }

    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // define default task
    grunt.registerTask('default', ['browserSync']);
    grunt.registerTask('prod', ['cssmin','uglify', 'imagemin']);
};