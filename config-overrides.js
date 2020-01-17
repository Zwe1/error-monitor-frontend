/* config-overrides.js */
console.log("override-webpack-config...");

const path = require("path");

const pathResolve = p => path.join(process.cwd(), p);

module.exports = function override(config) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    ...config.resolve.alias,
    src: pathResolve("src"),
    ajax: pathResolve("src/http/index"),
    img: pathResolve("src/imgs"),
    com: pathResolve("src/components")
  };
  return config;
};
