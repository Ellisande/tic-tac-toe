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

gulp.task('js-lint', function(){
    return gulp.src('client/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css-lint', function(){
    return gulp.src('client/css/**/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter('default'));
});

gulp.task('lint', ['js-lint', 'css-lint']);

gulp.task('minify', ['css-minify','js-concat']);

gulp.task('watch', function(){
    gulp.watch('client/js/**/*.js', ['js-concat', 'js-lint']);
    gulp.watch('client/css/**/*.css', ['css-minify', 'css-lint' ]);
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

gulp.task('default', ['node', 'lint', 'minify', 'watch']);
