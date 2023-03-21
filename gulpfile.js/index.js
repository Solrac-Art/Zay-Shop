"use strict"

const buildStyle = require("./buildStyle");
 


module.exports.buildStyle = buildStyle.default;
module.exports.watchSass = buildStyle.watch;