const path = require('path')
const webpackPlugin = require('./Plugins/webpackPlugin')
module.exports = {
    mode: 'development', // 开发环境
    //mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.webpack$/,
                use: {
                    loader: path.resolve(__dirname, './loaders/test-webpack.js')
                }
            }
        ]
    },
    plugins: [
        new webpackPlugin() 
    ],
    devtool: 'source-map'
}