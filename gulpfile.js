var gulp = require('gulp');
var riot = require('gulp-riot');
var concat = require('gulp-concat');
var riot_css = require('gulp-riot-css');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');


gulp.task('riot', function() {
    return gulp.src('src/tags/*.tag')
        .pipe(riot_css({ css: 'css/riot_tag.css', js: 'js/riot_tag.js' }))
        .pipe(gulp.dest('dest/tags/'))
        .pipe(livereload());;
});


gulp.task('reloadwatch', function() {
    gulp.src(['dest/tags/*.js', 'dest/tags/*.css'])
        .pipe(watch(['dest/tags/*.js', 'dest/tags/*.css']))
        .pipe(connect.reload());
});


gulp.task('compilewatch', function() {
    gulp.watch(['src/tags/*.tag'], ['riot']);
});

gulp.task('connect', function() {
    livereload.listen();
    return connect.server({
        livereload: true,
        port: '3056'
    });
});



gulp.task('default', ['connect', 'compilewatch', 'reloadwatch']);

//
