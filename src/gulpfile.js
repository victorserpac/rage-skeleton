// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

/** Variables
 * ------------------------------------------ */
var sass_files = '../assets/sass/*.scss',
	sass_dir = '../assets/sass',
	css_dir = '../assets/css',
	// js_dir = '../assets/js/',
	js_files = '../assets/js/*.js',
	js_dest_dir = '../assets/js/dist',
	js_vendors_files = '../assets/js/vendors/*.js';
	js_components_files = '../assets/js/components/*.js';



/**
 * Tasks
 * =====================================================================
*/

// Lint Task
gulp.task('lint', function() {
    return gulp.src(js_files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass with Compass
gulp.task('compass', function() {
	gulp.src(sass_files)
		.pipe(compass({
			config_file: './config.rb',
			css: css_dir,
			sass: sass_dir,
		}))
		.pipe(gulp.dest(css_dir));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {

    gulp.src(js_files)
        .pipe(concat('main.concat.js'))
        .pipe(gulp.dest(js_dest_dir))
        .pipe(rename('main.concat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(js_dest_dir));

	gulp.src(js_vendors_files)
        .pipe(concat('vendors.concat.js'))
        .pipe(gulp.dest(js_dest_dir))
        .pipe(rename('vendors.concat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(js_dest_dir));

	gulp.src(js_components_files)
        .pipe(concat('components.concat.js'))
        .pipe(gulp.dest(js_dest_dir))
        .pipe(rename('components.concat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(js_dest_dir));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(js_files, ['lint', 'scripts']);
    gulp.watch(sass_files, ['compass']);
});

// Default Task
gulp.task('default', ['lint', 'compass', 'scripts', 'watch']);









// Compile sass
// gulp.task('styles', function() {
//   return gulp.src('src/styles/main.scss')
//     .pipe(sass({ style: 'expanded' }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('dist/assets/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('dist/assets/css'))
//     .pipe(notify({ message: 'Styles task complete' }));
// });
