module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  pkg: grunt.file.readJSON('package.json');
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "less/main.less" // destination file and source file
        }
      }
    },

    imagemin: {
      jpg: {
        options: {
          progressive: true,
          optimizationLevel: 5
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.jpg','**/*.jpeg'],
            dest: 'images/',
            ext: '.jpg'
          }
        ]
      },
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.png'],
            dest: 'images/',
            ext: '.png'
          }
        ]
      }
  },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'imagemin', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
