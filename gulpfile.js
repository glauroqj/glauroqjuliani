//Faz um require dos módulos instalados anteriormente.

var gulp = require ('gulp');
less = require('gulp-less');
plumber = require('gulp-plumber');
mincss = require('gulp-minify-css');
rename = require('gulp-rename');
jshint = require('gulp-jshint');
uglify = require('gulp-uglify');

// Utiliza o 'gulp-less', busca tudo que está dentro da pasta less, compila e devolve na pasta 'css', o gulp.src é o caminho do less e o gulp.dest de saída do css.

gulp.task('less', function () {
  gulp.src('less/templates.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(mincss())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('all'))
});

gulp.task('uglify', function () {
  gulp.src('js/glauro.js')
  .pipe(uglify())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('all'))
});

// Aqui a task watch fica observando por mudanças na pasta less, ou seja, toda vez que você salva algo no less ele já compila em css :)

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less']);
  gulp.watch('js/glauro.js', ['uglify']);
});

gulp.task('default',  ['less', 'uglify', 'watch']);