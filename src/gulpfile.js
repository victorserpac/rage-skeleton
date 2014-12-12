/**
 * Gulp config file
 * =====================================================================
*/

/** Requiring dependeces
 * ------------------------------------------ */
/* Include Gulp */
var gulp = require('gulp');

/* Include Plugins */
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var path = require('path');
var watch = require('gulp-watch');
var gulpSharp = require('gulp-sharp');



/**
 * Tasks
 * =====================================================================
*/

/** Lint - Task that use JSHint to verify the quality of our JS
 * ------------------------------------------ */
gulp.task('lint', function() {
    return gulp.src( '../assets/js/components/*.js' )
        .pipe(jshint())
        .pipe(jshint.reporter( 'default' ));
});

/** Compass - Task that will compile our .scss, after that, it will complete
 * the vendor prefixies automatically and last get together the commom media queries
 * ------------------------------------------ */
gulp.task('compass', function() {
    gulp.src( '../assets/sass/**/*.scss' )
        .pipe(compass({
            project: path.join(__dirname, '../assets'),
            css: 'css',
            sass: 'sass',
            image: 'images',
            font: 'fonts',
            style: 'expanded',
            comments: false,
            require: ['sass-globbing']
        }))
        .on('error', function(error) {
        	console.log(error.toString());
        })
        .pipe(autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
        .pipe(cmq())
        .pipe(gulp.dest( '../assets/css' ));
});


/** Scripts - Task that concat and minify our JS
 * ------------------------------------------ */
gulp.task('scripts', function() {
	gulp.src('../assets/js/vendors/*.js')
        .pipe(concat('vendors.concat.js'))
        .pipe(gulp.dest('../assets/js/'))
        .pipe(rename('vendors.concat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../assets/js/'));

    gulp.src('../assets/js/components/*.js')
        .pipe(concat('components.concat.js'))
        .pipe(gulp.dest('../assets/js/'))
        .pipe(rename('components.concat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../assets/js/'));
});



/** Images - Task to resize one image in diferents resolutions
 * ------------------------------------------ */
gulp.task('images', function(){

	return gulp.src('../assets/images/src/*')
		.pipe(gulpSharp({
			resize : [2600],
			max : true,
			quality : 100,
			progressive : true
		}))
        .pipe(gulp.dest('../assets/images'))

		/* ==> 1600 */
		.pipe(gulpSharp({
			resize : [1600],
			max : true,
			quality : 100,
			progressive : true
		}))
		.pipe(rename(function (path) {
			path.basename += "-1600";
		}))
		.pipe(gulp.dest('../assets/images'))

		/* ==> 1200 */
		.pipe(gulpSharp({
			resize : [1200],
			max : true,
			quality : 100,
			progressive : true
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace("-1600", "-1200");
		}))
		.pipe(gulp.dest('../assets/images'))

		/* ==> 800 */
		.pipe(gulpSharp({
			resize : [800],
			max : true,
			quality : 100,
			progressive : true
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace("-1200", "-800");
		}))
		.pipe(gulp.dest('../assets/images'))

		/* ==> 400 */
		.pipe(gulpSharp({
			resize : [400],
			max : true,
			quality : 100,
			progressive : true
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace("-800", "-400");
		}))
		.pipe(gulp.dest('../assets/images'))

		/* ==> 200 */
		.pipe(gulpSharp({
			resize : [200],
			max : true,
			quality : 100,
			progressive : true
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace("-400", "-200");
		}))
		.pipe(gulp.dest('../assets/images'));
});


/** Watch - Task to watch files to modify
 * ------------------------------------------ */
gulp.task('watch', function () {
    // Create LiveReload server
    livereload.listen();

    // Watch .js files on `components` and `vendors`
    gulp.watch( ['../assets/js/vendors/*.js', '../assets/js/components/*.js'], ['scripts']);

    // Watch .scss files
    gulp.watch( ['../assets/sass/**/*.scss'], ['compass']);

    // Watch .html and .css files, reload when modify
    gulp.watch( ['../assets/css/*.css', '../assets/js/*.concat.js', '../*.html'] ).on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['lint', 'compass', 'scripts', 'watch']);

// Init Task
gulp.task('init', ['compass', 'scripts']);
