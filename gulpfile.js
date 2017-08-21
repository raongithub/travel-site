var gulp = require ( 'gulp' );
var watch = require( 'gulp-watch' );

gulp.task( 'default', function () {
  console.log( 'Created a Gulp task.' );
});

gulp.task( 'html', function () {
  console.log( 'Do something useful being done to your HTML here.' );
});

gulp.task( 'style', function () {
  console.log( 'Do something useful being done to your CSS here.' );
});

gulp.task( 'watch', function () {
  watch( './app/index.html', function () {
    gulp.start( 'html' );
  });
  watch( './app/assets/style/**/*.css', function () {
    gulp.start( 'style' );
  });
});
