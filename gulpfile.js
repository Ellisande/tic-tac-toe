var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');

gulp.task('js-minify', function(){
    return gulp.src('client/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('js-lint', function(){
    return gulp.src('client/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css-minify', function(){
    return gulp.src(['client/css/**/*.css'])
        .pipe(concat('client.css'))
        .pipe(minify())
        .pipe(gulp.dest('build'));
});

gulp.task('css-lint', function(){
    return gulp.src('client/css/**/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter('default'));
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

gulp.task('lint', ['js-lint', 'css-lint']);

gulp.task('minify', ['css-minify','js-minify']);

gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['js-minify', 'js-lint']);
    gulp.watch('app/css/**/*.css', ['css-minify', 'css-lint' ]);
});

gulp.task('default', ['node','minify', 'lint','watch']);