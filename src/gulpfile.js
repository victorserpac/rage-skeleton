/**
 * Arquivo de configuração do Gulp
 * =====================================================================
*/

/** Fazendo require de dependências
 * ------------------------------------------ */
/* incluindo o Gulp */
var gulp = require('gulp');

/* Incluindo Plugins */
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



/**
 * Tasks (Tarefas)
 * =====================================================================
*/

/** Lint - Tarefa que usa o JSHint para fazer verificação de qualidade de nosso Javascript
 * ------------------------------------------ */
gulp.task('lint', function() {
    return gulp.src( '../assets/js/components/*.js' )
        .pipe(jshint())
        .pipe(jshint.reporter( 'default' ));
});

/** Compass - Tarefa que irá compilar nosso, depois colocar os prefixos
 * necessários automaticamente e por último unir as media queries em comum
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


/** Scripts - Task que irá concatenar e minifcar nosos Javascript
 * ------------------------------------------ */
// Vendors

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


/** Watch - Tasks para monitorar arquivos para modificações
 * ------------------------------------------ */
gulp.task('watch', function () {
    // Criar LiveReload server
    livereload.listen();

    // Monitorar arquivos .js do diretóio `components`
    gulp.watch( ['../assets/js/components/*.js'], ['lint']);

    // Monitorar arquivos .js do diretóio `vendors`
    gulp.watch( ['../assets/js/vendors/*.js', '../assets/js/components/*.js'], ['scripts']);

    // Monitorar arquivos .scss
    gulp.watch( ['../assets/sass/**/*.scss'], ['compass']);

    // Monitorar arquivos .html e .css, reload quando forem alterados
    gulp.watch( ['../assets/css/*.css', '../assets/js/*.concat.js', '../*.html'] ).on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['lint', 'compass', 'scripts', 'watch']);
