'use strict';

var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var port = 12345;

gulp.task('serve', function() {
  var server = gls.static('/', port);
  server.start();

  gulp.watch(['dist/**/*.js'], function(file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('copy', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dev'));
});

gulp.task('build', function() {
  var project = ts.createProject('tsconfig.json');
  
  return gulp.src('src/**/*.ts')
    .pipe(ts(project))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('default', ['copy', 'build']);
