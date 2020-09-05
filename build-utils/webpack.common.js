const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(css)$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    resolve:{
        extensions:["*",".js",".jsx","css"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hello Webpack bundled JavaScript Project',
          template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
    output:{
        path:path.resolve(__dirname,"../","dist"),
        publicPath:"/",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./dist"
    }

}