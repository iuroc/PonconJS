# script 标签直接引入示例

## 使用步骤

1. 下载 [`/dist/poncon.min.js`](../../dist/poncon.min.js)
2. 在网页中通过 `<script>` 引入
    ```html
    <script src="./dist/poncon.min.js"></script>
    ```
3. 编写 JavaScript 代码
    ```js
    const poncon = new Poncon()
    poncon.setPageList(['home', 'about'])
    poncon.start()
    ```