const gulp = require("gulp");
const gulpClean = require("gulp-clean");
const gulpImagemin = require("gulp-imagemin");

function clearImages() {
    return gulp.src("./public/assets/img/*", {read: false})
        .pipe(gulpClean())
}

function minifyImages() {
    return gulp.src("./app/galery/**/*")
        .pipe(gulpImagemin({verbose:true}))
        .pipe(gulp.dest("./public/assets/img"))
}

exports.watchImages = function () {
    gulp.watch("./app/galery/**/*", minifyImages);
}

exports.default = gulp.series(clearImages, minifyImages);
