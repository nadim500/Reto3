var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var gutil = require('gulp-util');

var pathJade = {
    origen: 'Builds/src/templates/**/*.jade',
    destino: 'Builds/development/views/'
};

var pathJs = {
    origen: './Builds/src/js/controllers/controller.js',
    destino: 'Builds/development/js/'
};

gulp.task('jade', function() {
    return gulp.src(pathJade.origen)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(pathJade.destino))
});

gulp.task('js', function() {
    return browserify(pathJs.origen)
        .bundle()
        .on('error',function(e){
            gutil.log(e);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(pathJs.destino));
});

