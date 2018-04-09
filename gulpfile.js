const gulp = require('gulp'),
	  autoprefixer = require('gulp-autoprefixer'),
	  rename = require("gulp-rename")
	  browserSync = require('browser-sync').create();

gulp.task('default', function(){
 gulp.src('app/css/*.css')
		.pipe(autoprefixer('last 2 versions'))
	   .pipe(gulp.dest('dist/css/'))
	   .pipe(rename({
    suffix: "-pref",
    extname: ".css"}))
	   .pipe(gulp.dest('dist/css'));
});
gulp.task('css', function() {
    return gulp.src("app/css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/css/*.css", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

    gulp.task('watch', ['serve', 'css'], function() {
        gulp.watch('app/css/*.css', ['css']); // Наблюдение за css файлами
    });
