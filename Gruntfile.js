'use strict';

module.exports = function (grunt) {
    var path = require('path'),
        helpers = require('amber-dev/lib/helpers');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amberc:all']);
    grunt.registerTask('test', ['amdconfig:app', 'requirejs:test_runner', 'execute:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "bower_components", "amber"),
                library_dirs: ['src', 'bower_components/amber/contrib/src']
            },
            all: {
                src: [
                    'src/Athens-Amber.st', // list all sources in dependency order
                    'src/Athens-Core.st',
                    'src/Athens-Core-Matrices.st',
                    'src/Athens-Core-Paints.st',
                    'src/Athens-Core-Paths.st',
                    'src/Athens-Core-PathGeometry.st',
                    'src/Athens-HTML.st',
                    'src/Athens-HTML-Matrices.st',
                    'src/Athens-HTML-Paints.st',
                    'src/Athens-HTML-Paths.st'
                ],
                amd_namespace: 'amber-athens',
                libraries: ['SUnit', 'Web']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            deploy: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {"app": 'define(["deploy"],function(x){return x});'},
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app'],
                    out: "the.js"
                }
            },
            devel: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {"app": 'define(["devel"],function(x){return x});'},
                    include: ['config', 'node_modules/requirejs/require', 'app'],
                    exclude: ['devel'],
                    out: "the.js"
                }
            },
            test_runner: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "app": "(" + function () {
                            define(["testing", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize();
                                amber.globals.NodeTestRunner._main();
                            });
                        } + "());"
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['config-node', 'app'],
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
            }
        },

        execute: {
            test_runner: {
                src: ['test_runner.js']
            }
        },

        clean: {
            test_runner: ['test_runner.js']
        }
    });

};
