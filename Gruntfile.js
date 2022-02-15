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
          "./assets/style/css/main.css": "./assets/style/less/main.less" // destination file and source file
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
            cwd: './assets/dist/src',
            src: ['**/*.jpg','**/*.jpeg'],
            dest: './assets/images/',
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
            cwd: './assets/dist/src/',
            src: ['**/*.png'],
            dest: './assets/images/',
            ext: '.png'
          }
        ]
      }
  },
    watch: {
      styles: {
        files: ['./assets/style/less/*'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'imagemin', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
