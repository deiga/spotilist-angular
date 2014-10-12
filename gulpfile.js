'use strict';

var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('help', taskListing);
