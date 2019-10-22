### 1.事件流

事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

事件捕获阶段

处于目标阶段

事件冒泡阶段

### 2.事件委托

事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。

### 3.图片的懒加载和预加载

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

### 4.mouseover和mouseenter的区别

1. mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout

2. mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

### 5.clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？

clientHeight：表示的是可视区域的高度，不包含border和滚动条

offsetHeight：表示可视区域的高度，包含了border和滚动条

scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。

clientTop：表示边框border的厚度，在未指定的情况下一般为0

scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

### 6. 异步加载js的方法

1. defer：只支持IE，如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，

   在页面完全加载后才执行。

2. async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。下载完毕后立刻执行

### 7. Ajax解决浏览器缓存问题

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

### 8 .eval是做什么的

把字符串参数解析成JS代码并运行，并返回执行的结果；

> 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

### 9. 如何理解前端模块化

前端模块化就是复杂的文件编程一个一个独立的模块，比如js文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了commonJS规范，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具webpack

### 10.将原生的ajax封装成promis

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

### 11.实现一个两列等高布局，讲讲思路

为了实现两列等高，可以给每列加上 padding-bottom:9999px;

margin-bottom:-9999px;同时父元素设置overflow:hidden;

### 12.去除字符串首尾空格

> 使用正则(^\s *)|(\s *$  )即可

### 13.性能优化

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

### 14 能来讲讲JS的语言特性吗

运行在客户端浏览器上；

不用预编译，直接解析执行代码；

是弱类型语言，较为灵活；

与操作系统无关，[跨平台](https://www.baidu.com/s?wd=%E8%B7%A8%E5%B9%B3%E5%8F%B0&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的语言；

脚本语言、解释性语言

### 15.JS实现跨域

JSONP：通过动态创建script，再请求一个带参网址实现跨域通信。

document.domain + iframe跨域：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

location.hash + iframe跨域：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

window.name + iframe跨域：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。

postMessage跨域：可以跨域操作的window属性之一。

CORS：服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。

代理跨域：启一个代理服务器，实现数据的转发

参考<https://segmentfault.com/a/1190000011145364>

### 16.什么是按需加载

当用户触发了动作时才加载对应的功能。触发的动作，是要看具体的业务场景而言，包括但不限于以下几个情况：鼠标点击、输入文字、拉动滚动条，鼠标移动、窗口大小更改等。加载的文件，可以是JS、图片、CSS、HTML等。

### 17.说一下什么是virtual dom

用JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异 把所记录的差异应用到所构建的真正的DOM树上，视图就更新了。Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。

### 18.JS中的继承

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
     function inherit(sub, sup) {
           sub.prototype = Object.create(sup.prototype);
           sub.prototype.constructor = sub;
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

### 19.简单介绍一下symbol

1. 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
2. 调用实例属性`description`，直接返回 Symbol 的描述。
3. 对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

### 20. 什么是事件监听

addEventListener()方法，用于向指定元素添加事件句柄

第一个参数是事件的类型(如 "click" ).

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。

- true - 事件句柄在捕获阶段执行（外部元素先被触发，在触发内部元素，）
- false- false- 默认。事件句柄在冒泡阶段执行（内部元素先被触发，然后再触发外部元素）

​	

### 21 .介绍一下promise

Promise是一个对象，保存着未来将要结束的事件

1. Promise对象代表一个异步操作，有三种状态，pending进行中，fulfilled已成功，rejected已失败，只有异步操作的结果，才可以决定当前是哪一种状态
2. 一旦状态改变，就不会再变，promise对象状态改变只有两种可能，从pending改到fulfilled或者从pending改到rejected。

### 22. C++,Java，JavaScript这三种语言的区别

**静态类型还是动态类型来看**

1. 静态类型，编译的时候就能够知道每个变量的类型，编程的时候也需要给定类型 如 Java C++
2. 动态类型，运行的时候才知道变量的类型，编程的时候无需指定类型，如 JavaScript ,PHP, Python

**编译型还是解释型来看**

1. 编译型语言，像C、C++，需要编译器编译成本地可执行程序后才能运行。由操作系统CPU直接执行，无需额外的虚拟机等。
2. 解释性语言，像JavaScript、Python，开发语言写好后直接将代码交给用户，用户使用脚本解释器将脚本文件解释执行。
3. Java语言，分为两个阶段。首先经过编译器编译，生成字节码，第二阶段，由Java 虚拟机运行字节码，使用解释器执行这些代码。

### 23.闭包及其作用

1. 闭包就是指有权访问另一个函数作用域中变量的函数

2. 闭包的应用：

   1、模仿块级作用域。2、保存外部函数的变量。3、封装私有变量

3. 单例模式

   ```javascript
    var SingLeton = (function () {
           var instance;
           var CreateSingLeton = function (name) {
               this.name = name;
               if (instance) { 
                   return instance;
               }
               this.getName();
               return instance = this;
           }
           CreateSingLeton.prototype.getName = function () {
               console.log(this.name);
           }
           return CreateSingLeton;
       })()
       1
       var a = new SingLeton('a');
       var b = new SingLeton('b');
       console.log(a===b)// true
   ```

### 24. Generator 的使用

1. 分段执行，可以暂停
2. 可以控制阶段和每个阶段的返回值
3. 可以知道是否执行到结尾

### 25. 事件委托以及冒泡原理。

1. **事件委托**是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是：减少内存消耗，节约效率
2. **事件冒泡**就是元素自身的事件被触发后，如果父元素有相同的事件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到document/window，冒泡过程结束。

### 26.箭头函数

箭头函数与普通函数的区别在于：

1. 箭头函数没有this，所以需要通过查找作用域链来确定this的值，this绑定的就是最近一层非箭头函数的this。
2. 箭头函数没有自己的arguments对象，但是可以访问外围函数的arguments对象
3. 不能通过new关键字调用.

### 27. DOM0级，DOM2级，DOM的分级

**DOM0**

1. 直接在DOM对象上注册事件，解除事件直接赋值为null
2. 一个DOM对象只能注册一个同类型的函数。

**DOM2**

1. 指定了两个方法用于指定和删除事件：`addEventListener` 和 `removeEventListener`

2. 一个DOM 对象可以注册多个相同类型的事件

3. 添加的事件处理程序必须使用`removeEventListener`来移除。

   > 添加的匿名函数将无法移除

### 28. 基本数据类型和引用数据类型

1. 基本数据类型的值在内存中占固定大小空间，保存在栈内存中。引用数据类型的值是对象，保存在堆内存中。
2. 基本数据类型是简单的赋值，一个变量向另一个变量赋值，而引用数据类型赋值是对象的引用，赋值的是指针
3. 基本数据类型的比较是值的比较，引用类型的比较是引用的比较，比较对象的内存地址是否相同
4. 基本类型使用typeof操作符确定类型，引用类型使用instanceof 确定类型

### NaN是什么的缩写

NaN是JS中的特殊值，表示非数字，NaN不是数字，但是他的数据类型是数字，它不等于任何值，包括自身，在布尔运算时被当做false。

### JS的作用域类型

**函数作用域**，如果在函数内部我们给未定义的一个变量赋值，这个变量会转变成为一个全局变量

**块作用域**：块作用域把标识符限制在{}中

**改变函数作用域的方法：**

1. eval（），这个方法接受一个字符串作为参数，并将其中的内容视为可执行的代码
2. with关键字：通常被当做重复引用同一个对象的多个属性的快捷方式

### 怎么获得对象上的属性

1. for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型
2. Object.keys（）:返回一个数组，包括所有可枚举的属性名称
3. Object.getOwnPropertyNames:返回一个数组包含不可枚举的属性

### 简单讲一讲ES6的一些新特性

1. 声明和定义增加了 let 和 const
2. 字符串方面增加了模板字符串，赋值中有比较吸引人的结构赋值
3. 引入了新的数据类型symbol，新的数据结构set和map,symbol可以通过typeof检测出来、
4. 为解决异步回调问题，引入了promise和 generator
5. 实现Class和模块，通过Class可以更好的面向对象编程

**重要的特性：**

块级作用域：ES5只有全局作用域和函数作用域，块级作用域的好处是不再需要立即执行的函数表达式

rest参数：用于获取函数的多余参数，这样就不需要使用arguments对象了

> **Rest参数和arguments对象的区别**
>
> - Rest参数只包括那些没有给出名称的参数，arguments包含所有参数
> - arguments 对象不是真正的数组，而rest 参数是数组实例，可以直接应用sort, map, forEach, pop等方法
> - arguments 对象拥有一些自己额外的功能

promise:一种异步编程的解决方案

模块化：其模块功能主要有两个命令构成，export和import

### 写出原生Ajax

```javascript
var xhr = new XMLHttpRequest();
xhr.open('get', 'aabb.php', true);// true 表示异步
xhr.send(null);
xhr.onreadystatechange = function() {
    if(xhr.readyState==4) {
        if(xhr.status==200) {
        console.log(xhr.responseText);
        }
    }
}
```

### ajax返回的状态

0 － （未初始化）对象已建立，还未调用open（）

1 － （初始化）对象已建立，还未调用send()

2 － （发送数据）send方法已发送

3 － （数据传输中）已接受到部分数据

4 － （响应结束）接受所有数据

### 数组扁平化

数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

**递归**

循环数组元素，如果还是一个数组，就递归调用该方法：

```JavaScript
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}

```

**toString**

如果数组的元素都是数字，那么我们可以考虑使用 toString 方法

```javascript
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}
```

**reduce**

```javascript
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
```

**…rest**

```javascript
var arr = [1, [2, [3, 4]]];

function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}
```

### 实现sleep函数

```javascript
function sleep(d){
    var t = Date.now();
    while(Date.now()- t <= d);
} 
sleep(3000);
console.log('end')
```

### 怎么判断一个属性是否在对象中

**点( . )或者方括号( [ ] )**

通过点或者方括号可以获取对象的属性值，如果对象上不存在该属性，则会返回undefined

```javascript
// 创建对象
let test = {name : 'lei'}
// 获取对象的自身的属性
test.name            //"lei"
test["name"]         //"lei"
// 获取不存在的属性
test.age             //undefined
```

**in 运算符**

如果指定的属性在指定的对象或其原型链中，则in 运算符返回true

```javascript
'name' in test        //true
'un' in test             //true
'toString' in test    //true
'age' in test           //false
```

> 注意：这种方式的局限性就是无法区分自身和原型链上的属性

**hasOwnProperty()**

```javascript
test.hasOwnProperty('name')        //true   自身属性
test.hasOwnProperty('age')           //false  不存在
test.hasOwnProperty('toString')    //false  原型链上属性
```

> 　可以看到，只有自身存在该属性时，才会返回true。适用于只判断自身属性的场景。

### DOM节点操作

**创建节点**

document.createElement();*//创建元素*

document.createTextNode();*//创建文本节点*

**添加节点**

var ele = document.getElementById("my_div");
var oldEle = document.createElement("p");
var newEle=document.createElement("div");

ele.appendChild(oldEle);

**移除**

ele.removeChild(oldEle);

**替换**

ele.replaceChild(newEle,oldEle)

**克隆**

var cEle = oldEle.cloneNode(true);*//深度复制，复制节点下面所有的子节点*

cEle = oldEle.cloneNode(false);*//只复制当前节点，不复制子节点*

### 正则贪婪模式匹配 非贪婪模式匹配 

> 贪婪模式在整个表达式匹配成功的前提下，尽可能多的匹配，而非贪婪模式在整个表达式匹配成功的前提下，尽可能少的匹配

### FileReader

> `FileReader` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 或 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象指定要读取的文件或数据。

### Base64编码的原理

Base64可以将ASCII字符串或者是二进制编码成只包含A—Z，a—z，0—9，+，/ 这64个字符（ 26个大写字母，26个小写字母，10个数字，1个+，一个 / 刚好64个字符）。

### Promise.all() 和 Promise.race() 

**Promise.all()**

> promise.all主要用于一次性执行多个异步方法，并且按传入顺序执行

```javascript
function fun1(num = -1) {
    // 在fun1中返回一个promise对象
    return new Promise(function(resolve, reject) {
        // 为了体现是异步接口，这里使用一个定时器，延迟3秒
        setTimeout(resolve, 3000, 'fun1');
    })
};
function fun2(num2 = 200) {
    // 在fun2中也返回一个promise对象
    return new Promise(function(resolve, reject) {
        // 为了和fun1区分开来，fun2延迟1秒
        setTimeout(resolve, 1000, 'fun2');
    })
}
// 由于fun1和fun2是方法，所以使用fun1()执行该方法
Promise.all([fun1(), fun2()]).then(function(result) {
    console.log(result) // 输入应该为 ['fun1','fun2']
})
```

**Promise.race()**

> 在执行多个异步操作中，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃

```javascript
var fun1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000, 'fun1');
});
var fun2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, 'fun2');
});
// *注：这里使用的示例和promise.all用的示例类似，
// 可是没有用()执行，因为fun1就是一个promise对象，不需要执行
Promise.race([fun1, fun2]).then(function(result) {
    console.log(result); // 'fun2'   因为fun2比较早执行结束
});
```

###  设计模式

单例模式： 保证一个类仅有一个实例，并提供一个访问他的全局访问点例如框架中的数据库连接

工厂模式

> 目的是为了创建对象，通常在类或者类的静态方法中实现
>
> 1. 当创建相似对象时执行重复的操作
> 2. 在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口

观察者模式： 一个对象通过添加一个方法使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。例如实现实现消息推送

装饰者模式： 不修改原类代码和继承的情况下动态扩展类的功能，例如框架的每个Controller文件会提供before和after方法

迭代器模式： 提供一个方法顺序访问一个聚合对象中各个元素。

### web socket and web worker

> web socket提供更高效的传输协议，web worker提供多线程提高web应用计算效率

 Web Socket

> 
>
> worker的主线程和子线程间通过postMessage()来发送消息，通过向 web worker 添加一个 "onmessage" 事件监听器来获取接受到的消息。websocket是一种协议，本质上和HTTP，TCP一样。协议是用来说明数据是如何传输。

URL前缀是`ws://` 不加密传输

URL前缀是`wss://` 加密传输

web worker

> web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。
>
> worker的主线程和子线程间通过postMessage()来发送消息，通过向 web worker 添加一个 "onmessage" 事件监听器来获取接受到的消息。

###  Js中String Array Math内部常用的方法

String

1. charAt():返回指定位置的字符
2. concat() 连接两个或多个字符
3. toLowerCase(）:把字符串转换为小写
4. toUpperCase()  ：把字符串转换为大写
5. indexOf()：返回字符串中检索指定字符最后一次出现的位置
6. replace()：替换与正则表达式匹配的子串
7. split()：把字符串分割为子字符串数组

Array

1. concat() 用于连接两个或多个数组。

2. push() 可接受任意数量参数，添加到数组末尾，返回修改数组的长度。

3. pop() 从末尾移除最后一项，减少数组长度，返回移除的项

4. unshift() 可接受任意数量参数，在数组前端添加任意个项，返回数组的长度

5. shift() 移除数组中的第一个项，数组长度减一，返回移除的项

6. reverse() 反转数组项的顺序

7. sort() 按升序排列数组项

8. slice() 一个或两个参数，返回起始位置和结束位置之间项不包括结束位置项

9. splice()

   删除：两个参数，要删除第一项的位置和要删除的项数
   插入：（起始位置，0（要删除的项），要插入的项）
   替换：(起始位置，要删除的项数，要插入的项)
   该方法始终返回一个数组，该数组中包含从原始数组中删除的项。

   Math

   ceil floor max min pow round random

10. js中new和object.create区别

| 比较     | new                     | Object.create           |
| -------- | ----------------------- | ----------------------- |
| 构造函数 | 保留原构造函数属性      | 丢失原构造函数属性      |
| 原型链   | 原构造函数prototype属性 | 原构造函数/（对象）本身 |
| 作用对象 | function                | function和object        |

### BOM对象

**window 对象，是 JS 的最顶层对象，其他的 BOM 对象都是 window 对象的属性；**

1. document 对象，文档对象；

2. location 对象，浏览器当前URL信息；

   > herf = 'url地址'
   > hash 返回#号后面的字符串，不包含散列，则返回空字符串。
   > host 返回服务器名称和端口号
   > pathname 返回目录和文件名。 /project/test.html
   > search 返回？号后面的所有值。
   > port 返回URL中的指定的端口号，如URL中不包含端口号返回空字符串

3. navigator 对象，浏览器本身信息；

   > navigator.platform：操作系统类型；
   > navigator.userAgent：浏览器设定的User-Agent字符串。
   > navigator.appName：浏览器名称；
   > navigator.appVersion：浏览器版本；

4. screen 对象，客户端屏幕信息；

   > screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。                                         screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任栏。

5. history对象

   > history.back() - 加载历史列表中的前一个 URL。返回上一页。
   >
   > history.forward() - 加载历史列表中的下一个 URL。返回下一页。                                                                                             go(“参数”) -1表示上一页，1表示下一页。

### 什么是元编程

> 能“介入”的对象底层操作进行的过程中，并加以影响。元编程中的 元 的概念可以理解为 程序 本身。”元编程能让你拥有可以扩展程序自身能力“
>
> 参考 : [怎么理解元编程](<https://www.zhihu.com/question/23856985> )

### Reflect 和 Proxy 

**Reflect** 

Reflect 是一个内置对象，它提供了拦截JavaScript操作的方法，他自身没有构造函数，不能与new操作符一起使用，或者将其作为一个对象来调用。它的所有属性和方法都是静态的。

### forEach()能够中断吗

不能中断，只能抛出异常，这样的话，forEach是错误的

###  函数提升要比变量提升

函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。

###  fetch和ajax**的认识和区别**

**fetch**：

1. fetch是基于Promise实现的
2. fetchfetch请求默认是不带cookie的，需要设置
3. 服务器返回400 500 状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject。

A**ajax**:

1. 是XMLHTTPRequest的一个实例
2. 只有当状态为200或者304时才会请求成功

### ES5/ES6 的继承除了写法以外还有什么区别

ES5 和 ES6 子类 `this` 生成顺序不同。ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例，ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。

### ES6中 class有什么特性

1. class的声明的类名会有暂时性死去，类似const 和let
2. class 声明内部开启了严格模式
3. class中的所有方法包括静态方法和实例方法，都是不可枚举的。
4. class的所有方法（包括静态方法和实例方法）都没有原型对象，也没有constructor,不能使用new来调用。
5. class必须使用new来调用，不能直接写类名。
6. class内部无法重写类名。

###  Js获取盒模型的宽高

1. clientWidth 内容宽度 + 左右padding
   clientHeight 内容高度 + 上下padding
2. clientLeft 左边框
   clientTop 上边框
3. offsetWidth = clientWidth(内容宽+左右padding) + 左右边框
   offsetHeight = clientHeight(内容高+上下padding) + 上下边框

###  Object.prototype.toString.call()  

1. Object.prototype.toString.call()

   每一个对象都具有 toString 方法，如果 toString  没有被重写，那么它会返回 [object type] , type 是对象的基本类型 , 除了 object 类型的对象外，其他类型的对象调用 toString 方法会返回内容的字符串，所以我们需要使用 call 方法来改变 toString 方法的执行上文。

   这种方法对于所有的基本类型都能进行判断，即使是 null 和 undefined。

2. instanceof 

   它的内部执行机制是通过判断对象原型链上是否能找到类型的 prototype。

   例如判断一个对象是否是一个数组， instanceof 会判断这个对象的原型链上是否会找到 对应的Array ，找到返回 true , 否则返回 false 。

   instanceof 只能用来判断对象类型，而不能判断基本类型。

###  [ 关于null是不是等于0问题的探讨](https://www.php.cn/js-tutorial-374755.html)

```javascript
console.log(null > 0);   // false

console.log(null < 0);   // false

console.log(null >= 0);   // true

console.log(null <= 0);   // true

console.log(null == 0);   // false

console.log(null === 0);    // false
```

### 为什么前端监控要用GIF打点

**前端监控是什么？**

web页面将用户一些信息上传给服务器，向服务器上传信息的方式通常可以采用，接口，文件，图片的方式。

**为什么不采用接口的方式**

一般打点的域名都不是当前的域名，接口的请求就会产生跨域。

**为什么不采用文件**

由于浏览器的特性，创建资源节点只要将其插入DOM树，浏览器才会实际发送资源的请求。但是操作DOM结构会严重影响性能，同时加载js/css 文件会阻塞页面的渲染。

**为什么采用gif，而不是png，jpeg图片呢**

主要原因就是体积大小。