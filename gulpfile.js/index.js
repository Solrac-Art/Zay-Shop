"use strict"

const buildStyle = require("./buildStyle");
const buildScript = require("./buildScript");
 


module.exports.buildStyle = buildStyle.default;
module.exports.watchSass = buildStyle.watch;

module.exports.buildScript = buildScript.default;
module.exports.watchTs = buildScript.watch;