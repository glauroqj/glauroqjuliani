var gulp = require ('gulp');
less = require('gulp-less');
plumber = require('gulp-plumber');
mincss = require('gulp-minify-css');
rename = require('gulp-rename');
jshint = require('gulp-jshint');
uglify = require('gulp-uglify');
browserSync = require('browser-sync');
reload = browserSync.reload;

gulp.task('less', function () {
  gulp.src('app/less/templates.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(mincss())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('app/all'))
});

gulp.task('uglify', function () {
  gulp.src('app/js/glauro.js')
  .pipe(uglify())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('app/all'))
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('app/less/*.less', ['less']);
  gulp.watch('app/js/glauro.js', ['uglify']);
  gulp.watch(['views/*.html', 'less/**/*.less', 'js/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('default',  ['less', 'uglify', 'serve', 'watch']);