module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			sass:{
				files:['app/scss/*.scss'],
				tasks:['sass','cssmin','uglify']
			}
		},

		cssmin:{
			my_target:{
				files:[{
					expand: true,
					cwd: 'app/css/',
					src: ['*.css','!*.min.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
		},

		sass:{
			dist:{
				files:{
					'app/css/styles.css' : 'app/scss/style.scss'
				}
			}
		},

		uglify:{
			options:{
				manage:false
			},
			my_target:{
				files:[{
					expand: true,
					cwd: 'app/js/',
					src: '**/*.js',
					dest: 'dist/js/',
					ext: '.min.js'
				}]
			}
		},

		copy: {
		  main: {
		  	files: [
		  	{
			  	expand:true,
			  	cwd: 'node_modules/',
			  	src: '**',
			  	dest: 'dist/node_modules/'		  		
		  	},{
			  	expand:true,
			  	src: '*.html',
			  	dest: 'dist/'
		  	}
		  	]

		  },
		},

		connect:{
			server:{
				options:{
					livereload:35729,
					port:8000,
					hostname: '*',
					base:'dist/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build',['uglify','sass','cssmin']);
	grunt.registerTask('serve',[
		'sass',
		'cssmin',
		'uglify',
		'copy',
		'connect:server',
		'watch'
	]);

};