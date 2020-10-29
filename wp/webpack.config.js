const defaults = require("@wordpress/scripts/config/webpack.config");

console.log(defaults);

module.exports = {
  ...defaults,
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};