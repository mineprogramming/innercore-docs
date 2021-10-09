module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'documentation/com/zhekasmirnov/**/*.d.ts',
                    'documentation/*.d.ts'
                ],
                dest: 'headers/core-engine.d.ts',
            },
            options: {
                banner: "/// <reference path=\"./android.d.ts\"/>\n\n"
            }
        },
    
        typedoc: {
            build: {
                options: {
                    out: 'out',
                    includeDeclarations: true,
                    excludeExternals: true,
                    target: 'ES6',
                    mode: 'file',
                    name: 'Core Engine API',
                    readme: 'readme.md',
                    theme: 'pages-plugin',
                    listInvalidSymbolLinks: 'true',
                    'sourcefile-url-prefix': 'https://github.com/zheka2304/innercore-mod-toolchain/tree/master/toolchain-mod/toolchain/declarations/'
                },
                src: ['headers/core-engine.d.ts']
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: 'headers/*',
                        flatten: true,
                        dest: 'out/'
                    },
                    {
                        expand: true,
                        src: 'documentation/images/*',
                        flatten: true,
                        dest: 'out/assets/images/pages'
                    }
                ]                
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.registerTask('docs', ['concat', 'typedoc', 'copy']);
};
