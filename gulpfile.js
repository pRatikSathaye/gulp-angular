var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  del = require('del'),
  bower = require('gulp-bower'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  gutil = require('gulp-util');

// Create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!');
});

gulp.task('copy', function() {
  gulp.src('./bower_components/*/**').pipe(gulp.dest('public/vendor/'));
})

gulp.task('jshint', function() {
  return gulp.src('public/javascripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean:bower', function() {
  return del([
    'bower_components',
    'public/vendor'
  ]);
});

gulp.task('bower', function() {
  return bower();
  // .pipe(gulp.dest('./public/vendor'));
});

gulp.task('build', ['jshint'], function() {
  return gulp.src('public/javascripts/**/*.js')
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build'));
})
