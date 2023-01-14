# PonconJS 前端路由控制系统

## 介绍

- 面向对象设计
- 原生 JavaScript 开发
- 支持页面 hash 监听和路由传参
- 使用 CSS display 控制页面显示
- 路由格式：`host/[filename]#/target[/args]`

## 使用说明

- 入口页面必须是 `div.poncon-home.poncon-page`

## 使用方法

- 引入 poncon.js
  
    ```html
    <script src="poncon.js"></script>
    ```

- 注意以下代码需要在页面加载完成后执行，如 window.onload

- 实例化一个 poncon 对象

    ```js
    var poncon = new Poncon()
    ```

- 注册页面列表

    ```js
    poncon.setPageList(['home', 'about'])
    ```

- 设置页面事件

    ```js
    poncon.setPage('home', function (target, dom, args) {
        console.log(target, dom, args)
    })
    poncon.setPage('about', function (target, dom, args) {
        console.log(target, dom, args)
    })
    ```

- 启动路由系统（必须在最后执行）

    ```js
    poncon.start()
    ```

- HTML页面模板
  
    ```html
    <div class="poncon-home poncon-page">
        <!-- Your code -->
    </div>
    
    <div class="poncon-about poncon-page">
        <!-- Your code -->
    </div>
    ```

## 打包

```bash
npm run build
```

## API

- 获取当前页面标识名称

    - `getTarget` 方法：获取当前页面标识名称
