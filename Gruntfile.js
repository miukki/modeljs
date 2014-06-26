// Обязательная обёртка
module.exports = function(grunt) {
	//var mozjpeg = require('imagemin-mozjpeg');
    // Задачи
	require('load-grunt-tasks')(grunt);


	//reg my own task
	/*
	grunt.registerMultiTask('test', 'description', function() {
	    grunt.util.async.forEach(this.filesSrc, function(file, next) {
			console.log(file)
	    }, this.async());
	});
	*/

    grunt.initConfig({
		test: {

		},

        less: {
            compile: {
                files: {
                    "./assets/main.css": "./assets/main.less",
                }
            }
        },

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'imgOptim/'
				}]
			}

		},
		connect: {
		    server: {
		        options: {
					hostname: 'localhost',
		            port: 9001,
		            base: '.',
					keepalive: true
					//directory: '.'
		        }
		    }
		},
		//syntax
		jshint: {
		      files: ['scripts/main.js', 'scripts/**/*.js'],
		      options: {
		        globals: {
		          console: true,
		          module: true,
		          document: true
		        }
		      }
		    },

        concat: {
			options: {
			        separator: ';'
			    },
            main: {
                src: [
                    'scripts/main.js',
					'scripts/Controllers/AddController.js',
					'scripts/Controllers/ListController.js',
					'scripts/Models/User.js',
					'scripts/Views/AddView.js',
					'scripts/Views/ListView.js'
                ],
                dest: 'build/scripts.js'
            }

        },
        //uglify
		requirejs: {
			options: {
				baseUrl: '.',
				nextame: 'main',
				out: 'build/app.js'
			}
		},
		pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                files: {
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

	//make my own task
    // plugins
	//grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-connect');
	//grunt.loadNpmTasks('grunt-contrib-stylus');
	//grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-imagemin');


    // tasks
    grunt.registerTask('default', ['concat:main', 'uglify:main', 'jshint', 'imagemin', 'less:compile']);
 	 //grunt.registerTask('debug', ['concat']);
};
