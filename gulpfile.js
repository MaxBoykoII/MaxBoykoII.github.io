'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('inject', () => {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    
    var injectSrc = gulp.src(['./css/*.css'], {read: false});
    
    var options = {
        bowerJson: require('./bower.json'),
        directory: './lib'
    };
    var injectOptions = {ignorePath: ''};
    
    return gulp.src('./index.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
});

gulp.task('compile:sass', () => {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});