/* config-overrides.js */
console.log("override-webpack-config...");

const path = require("path");
const EmWebpackPlugin = require("error-monitor-webpack-plugin");

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

  config.plugins.push(
    new EmWebpackPlugin({
      url: "localhost:5000/sourcemap/upload",
      outputPath: config.output.path
    })
  );

  return config;
};
