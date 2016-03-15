import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import jspm from 'jspm';
const dist = 'build';

gulp.task('bundle', (done) => {
  jspm.setPackagePath('.');
  jspm.bundleSFX('src/index', dist + '/main.js', {
    sourceMaps: false,
    minify: true,
    mangle: true,
    separateCSS: true,
  })
  .then(() => {
    done();
  })
  .catch( (e) => console.log(e));
});

gulp.task('deploy', () => {
  return gulp.src(dist + '/**/*')
      .pipe(ghPages());
});
