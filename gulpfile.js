// Core Gulp Packages
var gulp  = require('gulp');
var gutil = require('gulp-util');


// HTML Requirements
var minifyHtml = require("gulp-minify-html");

//CSS Requirements
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');


//JS Requirements
var uglify = require("gulp-uglify");


gulp.task('minify-html', function () {
    gulp.src('src/components/**/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('build/src/components/'));
});

gulp.task('minify-css', function() {
   gulp.src('src/styles/**/*.css')
   .pipe(concat('styles.css'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(minifyCSS())
   .pipe(gulp.dest('build/src/styles/'));
});


gulp.task('minify-js', function () {
    gulp.src('src/JavaScript/**/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('build/src/styles/'));
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('build/'))
});


gulp.task('watch', function() {
  gulp.watch('src/components/**/*.html', ['minify-html']);
  gulp.watch('src/styles/**/*.css', ['minify-css']);
  gulp.watch('src/JavaScript/**/*.js', ['minify-js']);
  gulp.watch('index.html', ['copy']);
});


gulp.task('default', ['minify-html', 'minify-css', 'minify-js', 'copy', 'watch'], function() {

});