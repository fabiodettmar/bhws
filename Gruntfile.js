module.exports = function(grunt) {
   grunt.initConfig({        
	copy: {
		public: {
			expand: true,
			cwd: 'public',
			src:'**',
			dest:'dist'
		}
	},
	clean: {
		dist: {
			src: 'dist'
		}
	},
	useminPrepare: {
		html: 'dist/**/*.html',
		css: 'dist/css/**/*.css'
	},
	usemin: {
		html: 'dist/**/*.html',
		css: 'dist/css/**/*.css'
	},
	imagemin: {
		public: {
			expand: true,
			cwd: 'dist/img',
			src: '**/*.{png,jpg,gif}',
			dest: 'dist/img'
		}
	},	
	rev: {
		options: {
			encoding: 'utf8',
			algorithm: 'md5',
			length: 8
		},		
		imagens: {
			src: ['dist/img/**/*.{png,jpg,gif}']
		},

		minificados: {
			src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
		}
	}	
  });
  grunt.registerTask('dist', ['clean', 'copy']);
  grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'rev:imagens', 'rev:minificados', 'usemin', 'imagemin']);
  grunt.registerTask('default', ['dist', 'minifica']);
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-rev');
};
