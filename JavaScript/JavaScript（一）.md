## 事件流

1. 事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

   事件捕获阶段

   处于目标阶段

   事件冒泡阶段

## 事件委托

事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。

## 图片的懒加载和预加载

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

## mouseover和mouseenter的区别

1. mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout

2. mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

## 比如clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？

clientHeight：表示的是可视区域的高度，不包含border和滚动条

offsetHeight：表示可视区域的高度，包含了border和滚动条

scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。

clientTop：表示边框border的厚度，在未指定的情况下一般为0

scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

## 异步加载js的方法

1. defer：只支持IE，如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，

   在页面完全加载后才执行。

2. async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。下载完毕后立刻执行

## Ajax解决浏览器缓存问题

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

## eval是做什么的

把字符串参数解析成JS代码并运行，并返回执行的结果；

> 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

## 如何理解前端模块化

前端模块化就是复杂的文件编程一个一个独立的模块，比如js文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了commonJS规范，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具webpack



## 将原生的ajax封装成promis

```javascript
var  myNewAjax=function(url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send(data);
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&readyState==4){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
            }else if(xhr.readyState==4&&xhr.status!=200){
           		reject('error');
            }
        }
    })
}
```

## 实现一个两列等高布局，讲讲思路

为了实现两列等高，可以给每列加上 padding-bottom:9999px;

margin-bottom:-9999px;同时父元素设置overflow:hidden;



## 去除字符串首尾空格

> 使用正则(^\s *)|(\s *$  )即可

## 性能优化

减少HTTP请求

使用内容发布网络（CDN）

添加本地缓存

压缩资源文件

将CSS样式表放在顶部，把javascript放在底部（浏览器的运行机制决定）

避免使用CSS表达式

减少DNS查询

使用外部javascript和CSS

避免重定向

图片lazyLoad

## 能来讲讲JS的语言特性吗

运行在客户端浏览器上；

不用预编译，直接解析执行代码；

是弱类型语言，较为灵活；

与操作系统无关，[跨平台](https://www.baidu.com/s?wd=%E8%B7%A8%E5%B9%B3%E5%8F%B0&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的语言；

脚本语言、解释性语言

## JS实现跨域

JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。

document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

location.hash + iframe跨域：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。

postMessage跨域：可以跨域操作的window属性之一。

CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。

代理跨域：启一个代理服务器，实现数据的转发

参考<https://segmentfault.com/a/1190000011145364>



##  什么是按需加载

当用户触发了动作时才加载对应的功能。触发的动作，是要看具体的业务场景而言，包括但不限于以下几个情况：鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大小更改等。加载的文件，可以是JS、图片、CSS、HTML等。

## 说一下什么是virtual dom

用JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的DOM树上，视图就更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

## JS中继承实现的几种方式

1. 原型链继承，原型链继承简单易于实现，缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承

   ```javascript
   function Cat(){ 
   }
   Cat.prototype = new Animal();
   ```

   

2. 构造继承，可以实现多继承，通过call多个父类对象，缺点只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数复用

   ```javascript
   function Cat(name){
     Animal.call(this);
     this.name = name || 'Tom';
   }
   ```

   

3. 实例继承，实例继承的特点是不限制调用方法，缺点是例是父类的实例，不是子类的实例，不支持多继承

   ```javascript 
   function Cat(name){
     var instance = new Animal();
     instance.name = name || 'Tom';
     return instance;
   }
   ```

   

4. 拷贝继承：特点：支持多继承，缺点：效率较低，内存占用高

   ```javascript
   function Cat(name){
     var animal = new Animal();
     for(var p in animal){
       Cat.prototype[p] = animal[p];
     }
     Cat.prototype.name = name || 'Tom';
   }
   
   ```

   

5. 组合继承：通过调用父类构造，继承父类的属性并保留传参的优点 0

   缺点：调用了两次父类构造函数，生成了两份实例

   ```javascript
   function Cat(name){
     Animal.call(this);
     this.name = name || 'Tom';
   }4
   Cat.prototype = new Animal();
   // 组合继承也是需要修复构造函数指向的。
   Cat.prototype.constructor = Cat;
   ```

   

6. 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

   ```javascript
     function inherit(sub, sup) {
           var pro = Object(sup.prototype);
           console.log(pro)
           pro.constructor = sub;
           sub.prototype = pro;
       }
   
       function Super(name) {
           this.name = name;
           this.colors = ['red', 'blue'];
       }
       Super.prototype.sayName = function () {
           alert(this.name);
       }
   
       function Sub(name, age) {
           Super.call(this, name);
           this.age = age;
       }
       inherit(Sub, Super);
       Sub.prototype.sayAge = function () {
           alert(this.age);
       }
       var son = new Sub('李四', 29);
       son.sayAge();
   ```




> 1、原型链继承，将父类的实例作为子类的原型，他的特点是实例是子类的实例也是父类的实例，父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现，缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承，无法向父类构造函数传参。
>
> 2、构造继承，使用父类的构造函数来增强子类实例，即复制父类的实例属性给子类，
>
> 构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。但是构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数服用，每个子类都有父类实例函数的副本，影响性能
>
> 3、实例继承，为父类实例添加新特性，作为子类实例返回，实例继承的特点是不限制调用方法，不管是new 子类（）还是子类（）返回的对象具有相同的效果，缺点是实例是父类的实例，不是子类的实例，不支持多继承
>
> 4、拷贝继承：特点：支持多继承，缺点：效率较低，内存占用高（因为要拷贝父类的属性）无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
>
> 5、组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
>
> 6、寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点