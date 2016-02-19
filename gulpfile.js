var gulp = require('gulp');
var jade = require('gulp-jade');

var path = {
    origen: 'Builds/src/templates/**/*.jade',
    destino: 'Builds/development/views/'
};

gulp.task('jade', function() {
    return gulp.src(path.origen)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.destino))
});