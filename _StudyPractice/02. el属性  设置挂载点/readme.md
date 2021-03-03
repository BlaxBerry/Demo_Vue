# el 属性
el属性是挂载点，是**设置Vue实例挂载的元素**
通过元素的 `选择器`，把Vue挂载到页面指定元素中

- Vue的管理范围是el属性命中的元素及其内部后代

- el属性可以设置其他选择器，但建议使用**ID选择器**

- el属性可以设置其他双标签，建议使用**div**，不能挂载到body和document



## 1. 可命中元素及其的嵌套子元素
```html
   <div id="app">
        <span>
            {{message}}
        </span>
    </div>
```

## 2. el可设置任意选择器
推荐唯一的ID选择器，常用
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

## 3. el可设置在双标签上
Vue**不能挂载到 body 和 html 标签**
只能挂载双标签，不支持单标签
``` html
 <!-- h1标签 -->
    <h1 id="title">
        {{message}}
    </h1>
```