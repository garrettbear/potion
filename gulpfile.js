


var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.



gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        files: 'dist/css/*.css',
        server: {
            baseDir: "dist/"
        },
        notify: false,
        port: 8080,
        injectChanges: true
    });

    gulp.watch("dist/css/*.css").on("change", function(){
        browserSync.reload();
    });
});


gulp.task('default', gulp.series('serve'));
