var ProvidePlugin = require('webpack').ProvidePlugin;
var path = require('path');

module.exports = {
  entry: [
    './js/app.js'
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
      },
      {
        test: /\.s?css$/,
        exclude: /(node_modules)/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
        }]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|git)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }]
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery',
      "windows.jQuery": 'jquery',
    })
  ],
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      "waypoints": path.resolve(
        __dirname,
        "node_modules/waypoints/lib/jquery.waypoints.min"
      ),
    }
  }
};
