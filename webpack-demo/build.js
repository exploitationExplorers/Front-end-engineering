const path = require('path')

const config = require('./webpack.config')

const webpack = require('webpack')

console.log("🚀 ~ config:", config)

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('构建失败')
    }
    console.log('构建成功')
})


