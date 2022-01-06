var path = require('path');

module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-webfont');

	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				files: {
					// destination : [source file path as Array OR target all by *]
					'js/script.js' : ['_src/js/*.js']
				} //files
			} //my_target
		}, //uglify

		compass : {
			dev : {
				options : {
					config : 'config.rb'
				} //options
			} // dev
		}, //compass

		watch: {
			options : { liverelaod: true },
			scripts : {
				files : ['_src/js/*.js'],
				tasks: ['uglify']
			}, //scripts

			sass : {
				files : ['_src/sass/**/*.scss'],
				tasks : ['compass:dev']
			}, //sass

			html : {
				files : ['*.html']
			}, //html
		}, //watch

		webfont: {
			icons: {
				fontFamilyName: 'Movein',
				src: '_src/fonts/*.svg',
				dest: 'fonts',
				destCss: 'fonts',
				options: {
					embed: false,
					hashes: false,
					engine: 'node',
					htmlDemo: true,
					relativeFontPath: 'fonts',
					types: 'eot, woff, woff2, ttf, svg',
					templateOptions : {
						baseClass: 'mi',
						classPrefix: 'mi-',
					},
					customOutputs: [{
						context: {
							homeHeading: 'Your Icon Font',
							homeMessage: 'The following glyphs are available in this font:'
						}
					}]
				},
			} //icons
		} //webfont

	}) //initConfig

	// Register here a default task, now just need to run 'grunt' command.
	grunt.registerTask('default', 'watch');
} //exports