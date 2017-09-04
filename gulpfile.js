/*
Gulpfile.js file for the tutorial:
Using Gulp, SASS and Browser-Sync for your front end web development - DESIGNfromWITHIN
http://designfromwithin.com/blog/gulp-sass-browser-sync-front-end-dev
Steps:
1. Install gulp globally:
npm install --global gulp
2. Type the following after navigating in your project folder:
npm install gulp gulp-util gulp-sass gulp-uglify gulp-rename gulp-clean-css gulp-notify gulp-concat gulp-plumber browser-sync --save-dev
3. Move this file in your project folder
4. Setup your vhosts or just use static server (see 'Prepare Browser-sync for localhost' below)
5. Type 'Gulp' and start developing
*/

/* 
For additional documentation in setting up gulp for this project, please reference the following google doc.
https://docs.google.com/document/d/1dZfUJjP68vACm-ns598f3gf4xZZUGXXx196itQHlbHM/edit?usp=sharing
*/

/* Needed gulp config */
var gulp = require('gulp');  
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var neat = require('node-neat').includePaths;
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

/* Scripts task */
gulp.task('scripts', function() {
  return gulp.src([
    /* Add your JS files here, they will be combined in this order */
    'docs/evo/js/vendor/jquery-1.11.1.js',
    'docs/evo/js/app.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

/* Sass task */
gulp.task('evo', function () {  
    return gulp.src('scss/evo.scss')
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['scss'].concat(neat)
    }))
    .pipe(gulp.dest('docs/evo/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs/evo/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});

/* Sass task */
gulp.task('elements', function () {  
    return gulp.src('scss/evo-elements.scss')
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['scss'].concat(neat)
    }))
    .pipe(gulp.dest('docs/evo/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs/evo/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});

/* Sass task */
gulp.task('brand', function () {  
    return gulp.src('scss/evo-brand.scss')
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['scss'].concat(neat)
    }))
    .pipe(gulp.dest('docs/brand/evo/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs/brand/evo/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});

/* Sass task */
gulp.task('design', function () {  
    return gulp.src('scss/evo-design.scss')
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['scss'].concat(neat)
    }))
    .pipe(gulp.dest('docs/design/evo/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs/design/evo/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});


/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['docs/evo/css/*.css', 'docs/evo/js/*.js'], {
        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        // proxy: 'your_dev_site.url'
        /* For a static server you would use this: */
        
        server: {
            baseDir: './docs/'
        }
        
    });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['evo', 'elements', 'brand', 'design', 'scripts', 'browser-sync'], function () {
    /* Watch scss, run the sass task on change. */
    gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['default'])
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['docs/*.html'], ['bs-reload']);
});