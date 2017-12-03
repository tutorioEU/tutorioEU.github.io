var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
  });

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scripts', function () {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    "app/libs/bootstrap/dist/js/bootstrap.min.js"
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('clean', function () {
	return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
  gulp.watch(['app/sass/**/*.sass'], ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'sass', 'scripts'], function () {
  var buildCss = gulp.src('app/css/main.css')
  	.pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
  	.pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/**/*')
  	.pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/*.html')
  	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);
