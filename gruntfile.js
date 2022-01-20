module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'documentation/core-engine/declarations/com/zhekasmirnov/**/*.d.ts',
          'documentation/core-engine/declarations/*.d.ts'
        ],
        dest: 'documentation/core-engine/headers/core-engine.d.ts'
      },
      options: {
        banner: '/// <reference path="./android.d.ts"/>\n\n'
      }
    },

    typedoc: {
      build: {
        options: {
          out: './out/api/',
          name: 'Core Engine v2.1 API',
          readme: './README.md',
          // plugin: ['typedoc-github-wiki-theme'],
          theme: 'default',
          validation: {
            invalidLink: true
          },
          entryPoints: ['./documentation/core-engine/headers/core-engine.d.ts']
          // entryPointStrategy: 'expand',
          // src: ''
          // 'sourcefile-url-prefix': 'https://github.com/mineprogramming/innercore-docs/blob/gh-pages/',
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'documentation/core-engine/headers/*',
            dest: 'out/headers/'
          },
          {
            expand: true,
            flatten: true,
            src: 'documentation/static/core-engine/images/*',
            dest: 'out/api/assets/images/pages/'
          },
          {
            expand: true,
            src: '**/*',
            cwd: 'documentation/static/',
            dest: 'out'
          },
          {
            expand: true,
            src: 'README.md',
            dest: 'out/en'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-typedoc');
  grunt.registerTask('docs_api', ['concat', 'typedoc', 'copy']);
  grunt.registerTask('copyf', ['copy']);
};
