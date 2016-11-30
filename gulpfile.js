var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uncss 		= require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


gulp.task('uncss', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        
        .pipe(uncss({
            html: ['views/**/*.html','bower_components/**/**/**/*.js', 'scripts/**/*.js']
        }))
        .pipe(nano())
        .pipe(gulp.dest('./out'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["**/**/*.html","scripts/**/*.js"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
    	.pipe(plumber({errorHandler: function(err) {
    		notify.onError({
    			title:'Gulp error in ' + err.plugin,
    			message: err.toString()
    		})(err)

    		
    	}}))
        .pipe(sass())
        
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);