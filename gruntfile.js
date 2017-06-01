module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			sass:{
				files:['app/scss/*.scss'],
				tasks:['sass'],
			},
			cssmin:{
				files:['app/css/*.css'],
				tasks:['cssmin'],
			},
			uglify:{
				files:['app/js/*.js'],
				tasks:['uglify'],
			},
			copy:{
				files:['app/html/*.html'],
				tasks:['copy:subdir']
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
				beautify:true,
				mangle: true
			},
			all_src : { 
		      options : { 
		        sourceMap : true, 
		        sourceMapName : 'sourceMap.map'
		      }, 
		      src : 'app/**/*.js', 
		      dest : 'dist/js/composite.all.min.js'
		    }
		},

		livereload: {
			options: {
				base: 'app',
			},
			files: ['dist/**/*']
		},

		copy: {
		  subdir:{
		  	files: [{
			  	expand:true,
			  	cwd: 'app/html',
			  	src: '**',
			  	dest: 'dist/html/'		  		
		  	}]			 
		  },
		  main: {
		  	files: [{
			  	expand:true,
			  	cwd: 'node_modules/',
			  	src: '**',
			  	dest: 'dist/node_modules/'		  		
		  	},{
			  	expand:true,
			  	src: '*.html',
			  	dest: 'dist/'
		  	}]

		  },
		  html:{
		  	files: [{
			  	expand:true,
			  	src: '*.html',
			  	dest: 'dist/'
		  	}]

		  }
		},

		connect:{
			server:{
				options:{
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
	grunt.loadNpmTasks('grunt-livereload');

	grunt.registerTask('build',['uglify','sass','cssmin','copy']);
	grunt.registerTask('serve',[
		'copy:html',
		'connect:server',
		'watch'
	]);

};