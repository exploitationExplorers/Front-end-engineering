import "./test.webpack"

const sayWepack = () => {
    console.log("🚀 ~ sayWepack ~ Hello Webpack:")
    return "Hello Webpack"
}
  
const print = sayWepack()
console.log("🚀 ~ print",print)
