const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
 devServer: {
   static: './dist',
   hot: true
 },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          title: 'Production',
        })
    ],
    output: {
      filename: 'main.js',
    },

    module: {
        rules: [
            {
           use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            'css-loader'
       ],
       test: /\.css$/
    }
        ]
      }
}