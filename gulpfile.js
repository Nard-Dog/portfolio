const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('scripts', () => {
	return gulp.src('src/**/*.js')
	.pipe(plugins.rollup({
		entry: 'src/portfolio.js'
	}))
	.pipe(plugins.wrap('{\n\n<%= contents %>\n}'))
	.pipe(gulp.dest('assets'));
});

gulp.task('styles', () => {
	return gulp.src('src/portfolio.scss')
	.pipe(plugins.sass())
	.pipe(plugins.cleanCss())
	.pipe(gulp.dest('assets'));
});

gulp.task('markup', () => {
	return gulp.src('src/**/*.pug')
	.pipe(plugins.pug())
	.pipe(gulp.dest('./'));
});

gulp.task('default', ['scripts', 'styles', 'markup']);
