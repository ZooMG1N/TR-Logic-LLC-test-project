var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(prefix('last 3 versions', '1%', 'ie9'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],[sass]);

});

gulp.task('default', ['watch']);