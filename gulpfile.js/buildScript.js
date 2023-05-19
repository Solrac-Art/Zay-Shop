const gulp = require("gulp");
const gulpTs = require("gulp-typescript");
const gulpClean = require("gulp-clean");
const gulpMinifier = require("gulp-minifier");
const projectTs = gulpTs.createProject("tsconfig.json");

function clearFilesJs() {
    return gulp.src("./public/assets/js/**/*.js", {read: false})
        .pipe(gulpClean())
}

function compileFilesTs() {
    let tsResult =  projectTs.src()
        .pipe(projectTs());
    return tsResult.js.pipe(gulp.dest("./public/assets/js"));
}

function minifyJs() {
    return gulp.src("./public/assets/js/**/*.js")
        .pipe(gulpMinifier({
            minify: true,
            minifyJS: {
                sourceMap: false
            }   
        }))
        .pipe(gulp.dest("./public/assets/js"));
}

const buildScript = gulp.series(compileFilesTs, minifyJs);

function watchFilesTs() {
    return gulp.watch("./app/src/**/*.ts", buildScript);
}

exports.default = gulp.series(clearFilesJs, buildScript);
exports.watch = watchFilesTs;