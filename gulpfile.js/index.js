"use strict"
const gulp = require("gulp");
const buildStyle = require("./buildStyle.js");
const buildScript = require("./buildScript.js");
const buildImage = require("./buildImage.js");
const buildHtml = require("./buildHtml.js");
 

exports.default = gulp.series(
    buildHtml.default,
    buildStyle.default,
    buildScript.default,
    buildImage.default
)

exports.build = gulp.series(
    buildHtml.default,
    buildStyle.default,
    buildScript.default,
    buildImage.default
)

exports.dev = gulp.parallel(
    buildHtml.watch,
    buildStyle.watch,
    buildScript.watch,
    buildImage.watch
)
