var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

var pathJade = {
    origen: 'Builds/src/templates/**/*.jade',
    destino: 'Builds/development/views/'
};

var pathJs = {
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
    return browserify('Builds/src/js/controllers/controller.js')
        .bundle()
        .pipe(source(bundle.js))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(pathJs.destino));
});

//gulp.task('js', function() {

//});