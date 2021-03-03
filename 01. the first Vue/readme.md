# 第一个实例Vue对象
## 1. 导入Vue框架
```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

- **实例化Vue对象**

- 通过**el属性**设置要渲染的DOM元素

- 使用**data属性**渲染

- DOMO元素内容写入**`{{message}}`**



## 1. 实例化Vue对象并渲染DOM
```js
var app = new Vue({
    el:选择器,
    data:{
        message:DOM元素的内容
    }
})
```

## 2. DOM元素
要渲染的DOM元素内容写入`{{message}}`
```html
 <!-- id选择器 -->
    <div id="app">
        {{message}}
    </div>

    <!-- 类名选择器 -->
    <div class="app2">
        {{message}}
    </div>
    <br>
```