const gulp = require("gulp");
const gulpClean = require("gulp-clean");
const gulpHtmlInclude = require("gulp-file-include");
const gulpHtmlmin = require("gulp-htmlmin");

function clearHtml() {
    return gulp.src("./public/*.html", {read: false})
        .pipe(gulpClean())
}

function includeComponents() {
    return gulp.src("./app/pages/*.html")
        .pipe(gulpHtmlInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("./public/"))
}

function minifyHtml() {
    return gulp.src("./public/*.html")
        .pipe(gulpHtmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./public/"))
}

const buildHtml = gulp.series(includeComponents, minifyHtml);

exports.watch = function () {
    return gulp.watch("./app/pages/*.html", buildHtml);
}

exports.default = gulp.series(clearHtml, buildHtml);
