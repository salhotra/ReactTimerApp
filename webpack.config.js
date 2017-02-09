var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
  ],
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'public'],
    extensions: ['', '.js', '.jsx']
  },
  module:{
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015']
          }
        }
      ]
    }
};
