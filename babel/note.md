### babel

#### 1. babel是什么

babel是一个js编译器，将es6代码编译成es5代码，以便在浏览器中运行

#### 2. babel的原理

babel的原理是将es6代码转换成抽象语法树（AST），然后对AST进行转换，最后将转换后的AST转换成es5代码

#### 3. babel的配置

babel的配置文件是.babelrc，可以配置presets和plugins

presets是预设，可以配置多个预设，如@babel/preset-env，@babel/preset-react等