// grab our gulp packages
var gulp  = require('gulp');
var gutil = require('gulp-util');

var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('styles', function() {
   gulp.src(['src/styles/*.css'])
   .pipe(concat('styles.css'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(minifyCSS())
   .pipe(gulp.dest('build/styles/'));
});