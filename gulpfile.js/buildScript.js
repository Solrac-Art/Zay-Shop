const gulp = require("gulp");
const gulpTs = require("gulp-typescript");
const gulpClean = require("gulp-clean");
const projectTs = gulpTs.createProject("tsconfig.json");

function clearFilesJs() {
    return gulp.src("./public/assets/js/**/*", {read: false})
        .pipe(gulpClean())
}

function compileFilesTs() {
    let tsResult =  projectTs.src()
        .pipe(projectTs());
    return tsResult.js.pipe(gulp.dest("./public/assets/js"));
}

function watchFilesTs() {
    gulp.watch("./app/src/**/*.ts", compileFilesTs);
}

exports.default = gulp.series(clearFilesJs, compileFilesTs);
exports.watch = watchFilesTs;