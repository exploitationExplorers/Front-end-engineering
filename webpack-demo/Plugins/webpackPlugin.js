const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    {{JS}}
</head>
<body>
    
</body>
</html>
`
module.exports = class webpackPlugin {
    constructor() {}

    apply(compiler) {
       //console.log("🚀 ~ webpackPlugin ~ 启动:", compiler)
       compiler.hooks.emit.tap('webpackPlugin', compilation => {
        const assetsKeys = Object.keys(compilation.assets)
        const compilationHtml = html.replace('{{JS}}', 
            `<script>alert('webpack html')</script>
            ${assetsKeys.map(item => 
                item.indexOf('.map') == -1 &&
                `<script src="${item}"></script>`).filter(Boolean).join('')}
            `
        )
        compilation.assets['webpack.html'] = {
            source: () => compilationHtml,
            size: () => compilationHtml.length
        }
       })
    }

}