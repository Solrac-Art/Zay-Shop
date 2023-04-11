"use strict"

const buildStyle = require("./buildStyle.js");
const buildScript = require("./buildScript.js");
const buildImage = require("./buildImage.js");
 


exports.buildStyle = buildStyle.default;
exports.watchSass = buildStyle.watch;

exports.buildScript = buildScript.default;
exports.watchTs = buildScript.watch;

exports.buildImage = buildImage.default;
exports.watchImgs = buildImage.watch;