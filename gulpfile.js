var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');


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

gulp.task('default', ['node']);
