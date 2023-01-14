# Browseriy 示例

## 使用步骤

1. 编写 JavaScript 代码
    ```js
    const ponconjs = require('../../src/poncon')
    const poncon = new ponconjs.default()
    poncon.setPageList(['home', 'about'])
    poncon.start()
    ```
2. 打开终端，执行下面的命令
    ```bash
    tsc  # 编译 TS 代码
    browserify index.js -o bundle.js  # 打包
    uglifyjs bundle.js -m -c -o bundle.min.js  # 压缩
    ```
3. 将得到的 `bundle.min.js` 在 `</body>` 前引入