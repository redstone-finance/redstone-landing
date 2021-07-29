const gulp = require("gulp");
const { paths, baseDir, browserSync, isProd } = require("./utils.js");

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Watcher
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task("watch", () => {
  // BrowserSync
  browserSync.init({
    server: { baseDir },
    // proxy: '127.0.0.1:8010',
    port: 3000,
    open: true, // or "local"
    notify: false
  });

  const updating = (done) => {
    browserSync.reload();
    done();
  };

  gulp.watch(paths.style.src, gulp.series("style"));
  gulp.watch(paths.script.src, gulp.series("script"));
  gulp.watch(paths.html.src, gulp.series("html"));
  gulp.watch(
    paths.watch.map((dir) => `${paths.dir.dev}/${dir}`),
    gulp.series(updating)
  );
});
