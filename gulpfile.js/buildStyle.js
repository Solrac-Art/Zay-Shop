const gulp = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const gulpClean = require("gulp-clean");

function clearFilesCss() {
    return gulp.src("./public/assets/css/*", {read: false})
        .pipe(gulpClean())
}

function compileFilesSass() {
    return gulp.src("./app/styles/**/*.scss")
        .pipe(gulpSass({outputStyle: "compressed"}).on("error", gulpSass.logError))
        .pipe(gulp.dest("./public/assets/css"))
}

function watchFilesSass() {
    return gulp.watch("./app/styles/**/*.scss", compileFilesSass);
}

exports.default = gulp.series(clearFilesCss, compileFilesSass);
exports.watch = watchFilesSass;