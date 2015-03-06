module.exports = function(grunt) {

	/**
	 * Load required Grunt tasks. These are installed based on the versions listed
	 * in `package.json` when you do `npm install` in this directory.
	 */
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-fontello');

	/**
	 * Set base path
	 */
	grunt.file.setBase('./client');

	/**
	 * Build configuration
	 */
	var buildConfig = {

		/**
		 * The 'temp_dir' folder is where temporary files are stashed.
		 * The 'build_dir' folder is where the development build is constructed.
		 * The 'compile_dir' folder is where the fully compiled files are constructed.
		 * The 'deploy_dir' folder is where the final built/compiled code is stashed.
		 */
		temp_dir:		'../temp',
		build_dir:		'<%= temp_dir %>/build',
		compile_dir:	'<%= temp_dir %>/compile',
		deploy_dir:		'../public',

		/**
		 * This is a collection of file patterns that refer to the application code.
		 * These file paths are used in the configuration of build tasks.
		 */
		app_files: {
			assets: [
				'assets/**'
			],
			js: [
				'app/**/*.js',
				'common/**/*.js',
				'!app/**/*.spec.js',
				'!common/**/*.spec.js'
			],
			unit: [
				'app/**/*.spec.js',
				'common/**/*.spec.js'
			],
			tpl: {
				app: [
					'app/**/*.html',
					'!app/app.html'
				],
				common: [
					'common/**/*.html'
				],
			},
			html: 'app/app.html',
			less: 'app/app.less'
		},

		/**
		 * This is a collection of files used during testing only.
		 */
		test_files: {
			js: [
				'vendor/angular/plugins/angular-mocks.js'
			]
		},

		/**
		 * This is the same as 'app_files', except it contains patterns that
		 * reference vendor code that we need to place into the build somewhere.
		 */
		vendor_files: {
			js: [
				'vendor/angular/angular.js',
				'vendor/angular/plugins/angular-touch.js',
				'vendor/angular/plugins/angular-animate.js',
				'vendor/angular/plugins/angular-cookies.js',
				'vendor/angular/plugins/angular-sanitize.js',
				'vendor/angular/plugins/angular-resource.js',
				'vendor/angular/plugins/angular-messages.js',
				'vendor/angular/plugins/angular-ui-router.js',
				'vendor/angular/plugins/angular-smooth-scroll.min.js'
			],
			less: [],
			css: [],
			assets: []
		},

		/**
		 * Location of server files that need to be copied to the public folder
		 */
		server_files: '../server/run/'
	};

	/**
	 * This is the configuration object Grunt uses to give each plugin its instructions.
	 */
	var taskConfig = {

		/**
		 * Read in our package.json file so we can access the package name and version
		 */
		pkg: grunt.file.readJSON('../package.json'),

		/**
		 * The banner is the comment that is placed at the top of our compiled
		 * source files. It is first processed as a Grunt template, where the `<%=`
		 * pairs are evaluated based on this very configuration object.
		 */
		meta: {
			banner:
				'/**\n' +
				' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * <%= pkg.homepage %>\n' +
				' *\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' */\n'
		},

		/**
		 * Version bump
		 */
		bump: {
		    options: {
				files: ['package.json'],
				updateConfigs: ['pkg'],
				commit: false,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json'],
				createTag: false,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: 'upstream',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
				globalReplace: false
		    }
		},

		/**
		 * Text replace
		 */
		replace: {
			readmeVersion: {
				src: 'README.md',
				dest: 'README.md',
				replacements: [{
					from: /([0-9]\.[0-9]+\.[0-9]+)/i,
					to: '<%= pkg.version %>'
				}]
			},
			appVersion: {
				src: 'app/app.js',
				dest: 'app/app.js',
				replacements: [{
					from: /'([0-9]\.[0-9]+\.[0-9]+)'/i,
					to: '\'<%= pkg.version %>\''
				}]
			}
		},

		/**
		 * Fontello task
		 */
		fontello: {
			dist: {
				options: {
					config: 'assets/fonts/fontello.json',
					fonts: 'assets/fonts',
					styles: 'assets/fonts',
					force: true
				}
			}
		},

		/**
		 * The directories to delete when `grunt clean` is executed.
		 */
		clean: {
			options: {
				force:	true
			},
			temp: {
				src:	['<%= temp_dir %>/**']
			},
			public: {
				src:	['<%= deploy_dir %>/**']
			}
		},

		/**
		 * The copy task just copies files from A to B.
		 */
		copy: {

			//All application assets for the build
			build_app_assets: {
				files: [{
					src: [ '<%= app_files.assets %>' ],
					dest: '<%= build_dir %>',
					cwd: '.',
					expand: true
				}]
			},

			//Any vendor assets for the build
			build_vendor_assets: {
				files: [{
					src: [ '<%= vendor_files.assets %>' ],
					dest: '<%= build_dir %>',
					cwd: '.',
					expand: true,
					flatten: true
				}]
			},

			//Application javascript code for the build
			build_app_js: {
				files: [{
					src: [ '<%= app_files.js %>' ],
					dest: '<%= build_dir %>/js',
					cwd: '.',
					expand: true
				}]
			},

			//Vendor javascript code for the build
			build_vendor_js: {
				files: [{
					src: [ '<%= vendor_files.js %>' ],
					dest: '<%= build_dir %>/js',
					cwd: '.',
					expand: true
				}]
			},

			//Release the build to the public dir
			public_build: {
				files: [{
					src: [ '**' ],
					dest: '<%= deploy_dir %>',
					cwd: '<%= build_dir %>',
					expand: true
				}]
			},

			//Restore the build from the public dir
			public_build_restore: {
				files: [{
					src: [ '**' ],
					dest: '<%= build_dir %>',
					cwd: '<%= deploy_dir %>',
					expand: true
				}]
			},

			//All assets for the compiled distribution
			compile_assets: {
				files: [{
					src: [ '**' ],
					dest: '<%= compile_dir %>/assets',
					cwd: '<%= build_dir %>/assets',
					expand: true
				}]
			},

			//Release the compiled app to the public dir
			public_compile: {
				files: [{
					src: [ '**' ],
					dest: '<%= deploy_dir %>',
					cwd: '<%= compile_dir %>',
					expand: true
				}]
			},

			//Copy the public server files
			public_server: {
				files: [{
					src: [ '**' ],
					dest: '<%= deploy_dir %>',
					cwd: '<%= server_files %>',
					dot: true,
					expand: true
				}]
			},
		},

		/**
		 * HTML2JS is a Grunt plugin that takes all of your template files and
		 * places them into JavaScript files as strings that are added to
		 * AngularJS's template cache. This means that the templates too become
		 * part of the initial payload as one JavaScript file and don't need to be
		 * requested individually.
		 */
		html2js: {

			/**
			 * These are the templates from `app`.
			 */
			app: {
				options: {
					base: 'app',
					module: 'Templates.App'
				},
				src: [ '<%= app_files.tpl.app %>' ],
				dest: '<%= build_dir %>/js/app/templates.app.js'
			},

			/**
			 * These are the templates from `common`.
			 */
			common: {
				options: {
					base: 'common',
					module: 'Templates.Common'
				},
				src: [ '<%= app_files.tpl.common %>' ],
				dest: '<%= build_dir %>/js/app/templates.common.js'
			}
		},

		/**
		 * Recess handles our LESS compilation and uglification automatically.
		 * Only the 'app.less' file is included in compilation; all other files
		 * must be imported from within this file.
		 */
		recess: {
			build: {
				src: [ '<%= app_files.less %>' ],
				dest: '<%= build_dir %>/css/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.css',
				options: {
					compile: true,
					compress: false,
					noUnderscores: false,
					noIDs: false,
					zeroUnits: false
				}
			},
			compile: {
				src: [ '<%= recess.build.dest %>' ],
				dest: '<%= compile_dir %>/css/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.css',
				options: {
					compile: true,
					compress: true,
					noUnderscores: false,
					noIDs: false,
					zeroUnits: false
				}
			}
		},

		/**
		 * The concat task concatenates multiple source files into a single file
		 */
		concat: {

			/**
			 * The `build_css` target concatenates compiled CSS and vendor CSS
			 * together.
			 */
			build_css: {
				src: [
					'<%= vendor_files.css %>',
					'<%= recess.build.dest %>'
				],
				dest: '<%= recess.build.dest %>'
			},

			/**
			 * The `compile_app_js` target is the concatenation of our application source code
			 */
			compile_app_js: {
				src: [
					'grunt.module.prefix',
					'<%= build_dir %>/js/app/**/*.js',
					'<%= build_dir %>/js/common/**/*.js',
					'grunt.module.suffix'
				],
				dest: '<%= compile_dir %>/js/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.js'
			},

			/**
			 * The `compile_vendor_js` target is the concatenation of our application source
			 * code and all specified vendor source code into a single file.
			 */
			compile_vendor_js: {
				options: {
					banner: '<%= meta.banner %>'
				},
				src: [
					'<%= vendor_files.js %>',
					'<%= compile_dir %>/js/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.js',
				],
				dest: '<%= compile_dir %>/js/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.js'
			}
		},

		/**
		 * The 'ng-annotate' task annotates the sources before minifying, allowing us
		 * to code without the array syntax.
		 */
		ngAnnotate: {
			compile: {
				files: [{
					src: [ '<%= app_files.js %>' ],
					cwd: '<%= build_dir %>/js',
					dest: '<%= build_dir %>/js',
					expand: true
				}]
			}
		},

		/**
		 * Minify the javascript code
		 */
		uglify: {
			compile: {
				options: {
					banner: '<%= meta.banner %>'
				},
				files: {
					'<%= concat.compile_app_js.dest %>': '<%= concat.compile_app_js.dest %>'
				}
			}
		},

		/**
		 * `jshint` defines the rules of our linter as well as which files we
		 * should check. This file, all javascript sources, and all our unit tests
		 * are linted based on the policies listed in `options`. But we can also
		 * specify exclusionary patterns by prefixing them with an exclamation
		 * point (!); this is useful when code comes from a third party but is
		 * nonetheless inside `app/`.
		 */
		jshint: {
			src: [
				'<%= app_files.js %>'
			],
			test: [
				'<%= app_files.unit %>'
			],
			gruntfile: [
				'../gruntfile.js'
			],
			options: {
				debug: true,
				curly: true,
				immed: true,
				newcap: false,
				noarg: true,
				sub: true,
				boss: true,
				eqnull: true,
				expr: true
			}
		},

		/**
		 * This task compiles the karma config file so that changes to the file array
		 * don't have to be managed manually.
		 */
		karmaconfig: {
			template: '../grunt.karma-unit.js',
			dest: '../karma-unit.js',
			src: [
				'<%= vendor_files.js %>',
				'<%= test_files.js %>'
			]
		},

		/**
		 * The Karma unit tester configurations
		 */
		karma: {
			options: {
				configFile: '<%= karmaconfig.dest %>'
			},
			continuous: {
				runnerPort: 9101,
				background: true
			},
			unit: {
				singleRun: true
			}
		},

		/**
		 * The `index` task compiles the `index.html` file as a Grunt template. CSS
		 * and JS files co-exist here but they get split apart later.
		 */
		index: {

			/**
			 * During development, we don't want to have to wait for compilation,
			 * concatenation, minification, etc. So to avoid these steps, we simply
			 * add all script files directly to the `<head>` of `index.html`. The
			 * `src` property contains the list of included files.
			 */
			build: {
				dir: '<%= build_dir %>',
				src: [
					'<%= vendor_files.js %>',
					'<%= build_dir %>/js/app/**/*.js',
					'<%= build_dir %>/js/common/**/*.js',
					'<%= vendor_files.css %>',
					'<%= recess.build.dest %>'
				]
			},

			/**
			 * When it is time to have a completely compiled application, we can
			 * alter the above to include only a single JavaScript and a single CSS
			 * file.
			 */
			compile: {
				dir: '<%= compile_dir %>',
				src: [
					'<%= concat.compile_app_js.dest %>',
					'<%= vendor_files.css %>',
					'<%= recess.compile.dest %>'
				]
			}
		},

		/**
		 * And for rapid development, we have a watch set up that checks to see if
		 * any of the files listed below change, and then to execute the listed
		 * tasks when they do. This just saves us from having to type "grunt" into
		 * the command-line every time we want to see what we're working on; we can
		 * instead just leave "grunt watch" running in a background terminal.
		 *
		 * But we don't need the same thing to happen for all the files.
		 */
		delta: {

			/**
			 * By default, we want the Live Reload to work for all tasks; this is
			 * overridden in some tasks (like this file) where browser resources are
			 * unaffected. It runs by default on port 35729, which your browser
			 * plugin should auto-detect.
			 */
			options: {
				livereload: true
			},

			/**
			 * When the Gruntfile changes, we just want to lint it. In fact, when
			 * your Gruntfile changes, it will automatically be reloaded!
			 */
			gruntfile: {
				files: '../gruntfile.js',
				tasks: [ 'jshint:gruntfile' ],
				options: {
					livereload: false
				}
			},

			/**
			 * When our JavaScript source files change, we want to run lint them and
			 * run our unit tests.
			 */
			jssrc: {
				files: [
					'<%= app_files.js %>'
				],
				tasks: [ 'jshint:src', 'karma:unit:run', 'copy:build_app_js', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When vendor JavaScript source files change, simply copy them
			 */
			vendorjssrc: {
				files: [
					'<%= vendor_files.js %>'
				],
				tasks: [ 'copy:build_vendor_js', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When assets are changed, copy them. Note that this will *not* copy new
			 * files, so this is probably not very useful.
			 */
			assets: {
				files: [
					'assets/**/*'
				],
				tasks: [ 'copy:build_app_assets', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When the index file changes, we need to compile it.
			 */
			html: {
				files: [ '<%= app_files.html %>' ],
				tasks: [ 'copy:public_build_restore', 'index:build', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When our templates change, we only rewrite the template cache.
			 */
			tpls: {
				files: [
					'<%= app_files.tpl.app %>',
					'<%= app_files.tpl.common %>'
				],
				tasks: [ 'html2js', 'copy:build_app_js', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When the CSS files change, we need to compile and minify them.
			 */
			less: {
				files: [ 'app/**/*.less', 'common/**/*.less', 'vendor/**/*.less' ],
				tasks: [ 'recess:build', 'copy:public_build', 'clean:temp' ]
			},

			/**
			 * When a JavaScript unit test file changes, we only want to lint it and
			 * run the unit tests. We don't want to do any live reloading.
			 */
			unit: {
				files: [
					'<%= app_files.unit %>'
				],
				tasks: [ 'jshint:test', 'karma:continuous:run' ],
				options: {
					livereload: false
				}
			}
		}
	};

	/**
	 * Initialize configuration
	 */
	grunt.initConfig(grunt.util._.extend(taskConfig, buildConfig));

	/**
	 * In order to make it safe to just compile or copy *only* what was changed,
	 * we need to ensure we are starting from a clean, fresh build. So we rename
	 * the `watch` task to `delta` (that's why the configuration var above is
	 * `delta`) and then add a new task called `watch` that does a clean build
	 * before watching for changes.
	 */
	grunt.renameTask('watch', 'delta');
	grunt.registerTask('watch', ['build', 'karma:continuous', 'delta']);

	/**
	 * The default task is to build
	 */
	grunt.registerTask('default', ['build']);

	/**
	 * The 'build' task gets the app ready to run for development and testing.
	 */
	grunt.registerTask('build', [

		//Clean directories
		'clean:temp', 'clean:public',

		//Run JS hint
		'jshint',

		//Convert HTML templates to JS
		'html2js',

		//Compile CSS and merge with vendor CSS
		'recess:build', 'concat:build_css',

		//Copy application and vendor assets
		'copy:build_app_assets', 'copy:build_vendor_assets',

		//Copy application and vendor javascript files
		'copy:build_app_js', 'copy:build_vendor_js',

		//Build the index.html file
		'index:build',

		//Create karma config file and run unit tests
		'karmaconfig', 'karma:unit',

		//Copy everything to the public folder and clean the temp folder
		'copy:public_build', 'copy:public_server', 'clean:temp'
	]);

	/**
	 * The 'compile' task gets the app ready for deployment by concatenating and minifying code.
	 */
	grunt.registerTask('compile', [

		//Update the version number in the README and in app.js
		'replace:readmeVersion', 'replace:appVersion',

		//First, build the app, and copy stuff back to the build folder since we emptied the temp dir
		'build', 'copy:public_build_restore', 'clean:public',

		//Compile the final CSS
		'recess:compile',

		//Apply angular minification protection, concatenate all JS into a single file and minify the code
		'ngAnnotate', 'concat:compile_app_js', 'uglify', 'concat:compile_vendor_js',

		//Build the index.html file
		'index:compile',

		//Copy all assets
		'copy:compile_assets',

		//Copy everything to the public folder, clean the temp folder
		'copy:public_compile', 'copy:public_server', 'clean:temp'
	]);

	/**
	 * A utility function to get all JavaScript sources.
	 */
	function filterForJS (files) {
		return files.filter(function (file) {
			return file.match(/\.js$/);
		});
	}

	/**
	 * A utility function to get all CSS sources.
	 */
	function filterForCSS(files) {
		return files.filter(function (file) {
			return file.match(/\.css$/);
		});
	}

	/**
	 * The index template includes the stylesheet and javascript sources
	 * based on dynamic names calculated in this Gruntfile. This task assembles
	 * the list into variables for the template to use and then runs the
	 * compilation.
	 */
	grunt.registerMultiTask('index', 'Process index template', function () {
		var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g' );
		var jsFiles = filterForJS(this.filesSrc).map(function (file) {
			return file.replace(dirRE, '').replace('js/', '');
		});
		var cssFiles = filterForCSS(this.filesSrc).map(function (file) {
			return file.replace(dirRE, '');
		});
		var targetDir = this.target == 'compile' ? grunt.config('compile_dir') : grunt.config('build_dir');
		grunt.file.copy(grunt.config('app_files.html'), targetDir + '/index.html', {
			process: function (contents, path) {
				return grunt.template.process(contents, {
					data: {
						scripts: jsFiles,
						styles: cssFiles,
						version: grunt.config('pkg.version')
					}
				});
			}
		});
	});

	/**
	 * In order to avoid having to specify manually the files needed for karma to
	 * run, we use grunt to manage the list for us. The karma files are
	 * compiled as grunt templates for use by Karma.
	 */
	grunt.registerMultiTask('karmaconfig', 'Build karma config file', function () {
		var jsFiles = filterForJS(this.filesSrc);
		grunt.file.copy(grunt.config('karmaconfig.template'), grunt.config('karmaconfig.dest'), {
			process: function (contents, path) {
				return grunt.template.process(contents, {
					data: {
						scripts: jsFiles
					}
				});
			}
		});
	});
};