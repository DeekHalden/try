var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uncss 		= require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('javascript', function() {
    return gulp.src(['./scripts/app.js',
                     './scripts/controllers.js',
                     './scripts/controllers/details.js',
                     './scripts/controllers/header.js',
                     './scripts/controllers/home.js',
                     './scripts/controllers/overview.js',
                     './scripts/directives/rating.js',
                     './scripts/services/overview.overview.srv.js'
                    ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


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