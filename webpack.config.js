module.exports = {
  mode: 'development',
  entry: {
    javascript: "./app/js/app.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
