# PonconJS

> 前端路由控制系统

### 介绍

* 面向对象设计
* 原生 JavaScript 开发
* 支持页面 hash 监听和路由传参
* 使用 CSS display 控制页面显示
* 路由格式：`host/[filename]#/target[/args]`​

### 说明

* 入口页面必须是 `div.poncon-home.poncon-page`​

### 使用方法

#### 安装 PonconJS

* 使用 `<script>`​ 标签引入

  ```html
  <script src="./dist/poncon.min.js"></script>
  ```
* 通过 npm 安装

  ```bash
  npm install ponconjs
  ```

#### 创建 `poncon`​ 对象

注意以下代码需要在页面加载完成后执行，如 `window.onload`​。

* 通过 `<script>`​ 引入时

  ```js
  const poncon = new Poncon()
  ```
* 使用 JS + Browserify 时

  ```js
  const ponconjs = require('ponconjs')
  const poncon = new ponconjs.default()
  ```
* 使用 TS + Browserify 时

  ```ts
  import Poncon from 'ponconjs'
  const poncon = new Poncon()
  ```

#### 注册页面列表

```js
poncon.setPageList(['home', 'about'])
```

#### 设置页面事件

```js
poncon.setPage('home', function (target, dom, args) {
    console.log(target, dom, args)
})
poncon.setPage('about', function (target, dom, args) {
    console.log(target, dom, args)
})
```

#### 启动路由系统（必须在最后执行）

```js
poncon.start()
```

#### HTML页面模板

加上 `style="display: none;"`​ 可以防止页面元素闪烁。

```html
<div class="poncon-home poncon-page" style="display: none;">
    <!-- Your code -->
</div>

<div class="poncon-about poncon-page" style="display: none;">
    <!-- Your code -->
</div>
```

### Demo

* [script 标签引入示例](demo/script-tag-demo/README.md)
* [Browserify 示例](demo/browserify-demo/README.md)
* [TypeScript + Browserify 示例](demo/ts-browserify-demo/README.md)

### 打包项目

```bash
npm run build
```

### API

`getTarget`​：获取当前页面标识名称
