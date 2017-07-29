/*eslint-env node*/

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('less', function () {
    return gulp.src([
        './resources/less/injp.less'
    ])
    .pipe(less())
    .pipe(gulp.dest('./resources/css'));
});

gulp.task('compress', function () {
    return gulp.src([
        './vendors/bootstrap-3.3.7/js/transition.js',
        './vendors/bootstrap-3.3.7/js/alert.js',
        './vendors/bootstrap-3.3.7/js/button.js',
        './vendors/bootstrap-3.3.7/js/carousel.js',
        './vendors/bootstrap-3.3.7/js/collapse.js',
        './vendors/bootstrap-3.3.7/js/dropdown.js',
        './vendors/bootstrap-3.3.7/js/modal.js',
        './vendors/bootstrap-3.3.7/js/tooltip.js',
        './vendors/bootstrap-3.3.7/js/popover.js',
        './vendors/bootstrap-3.3.7/js/scrollspy.js',
        './vendors/bootstrap-3.3.7/js/tab.js',
        './vendors/bootstrap-3.3.7/js/affix.js'
    ])
    .pipe(uglify({
        mangle: true
    }))
    .pipe(concat('bootstrap.min.js'))
    .pipe(gulp.dest('./resources/js'));
});

gulp.task('wl', function() {
    gulp.watch('./resources/less/**/*.less', ['less']);
});

gulp.task('bs', function() {
    browserSync.init({
        files: ['*.html', './resources/**/*.css', './resources/**/*.js'],
        server: {
            baseDir: './'
        }
        //online: false
    });
});

gulp.task('default', ['wl', 'bs']);
