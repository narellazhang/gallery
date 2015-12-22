var gulp = require('gulp'),

 
  browserSync = require('browser-sync'),


  



gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });

 
  // Watch .js files
  
  gulp.watch(["./*.html", "./**/*.html","./scripts/*.js","./scripts/**/*.js"]).on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['serve'], function() {

});


//todo
//没有做文件的合并,必要时候可以增加
//插件：cancat .pipe(concat('main.js'))
