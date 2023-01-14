const { execSync } = require('child_process')
const fs = require('fs')

// 编译 TS
execSync('tsc')

// 读取编译后的 JS
const jsCodeStr = fs.readFileSync('src/poncon.js').toString()

// 去除模块化代码
const newCodeStr = jsCodeStr.replace(/^exports[.\[].*/gm, '')

// 写入新的 JS 文件
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}
fs.writeFileSync('dist/poncon.js', newCodeStr)

// Browserify 打包
execSync('browserify dist/poncon.js -o dist/poncon.min.js')

// UglifyJS 处理
execSync('uglifyjs dist/poncon.min.js -m -c -o dist/poncon.min.js')