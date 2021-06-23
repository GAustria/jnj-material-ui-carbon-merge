const path = require("path");
const webpack = require("webpack");

module.exports = {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx", ".css"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader'
        },
        {
          loader: "babel-loader",
          test: /\.js?$/,
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        },
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          loader: 'file-loader',
          include: [/fonts/],
    
          options: {
            name: '[hash].[ext]',
            outputPath: 'css/',
            publicPath: url => '../css/' + url
          },
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
};