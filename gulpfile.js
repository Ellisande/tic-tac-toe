var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');

gulp.task('js-concat', function(){
    return gulp.src('client/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('css-minify', function(){
    return gulp.src(['client/css/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(minify())
        .pipe(gulp.dest('build'));
});

gulp.task('node', function(){
  nodemon({
      script: 'server.js',
      ext: 'js',
      ignore: ['node_modules/**', 'client/**/*.js'] }
    )
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['node', 'js-concat', 'css-minify']);
