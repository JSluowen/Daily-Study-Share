## 简单介绍一下symbol

1. 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

2. 调用实例属性`description`，直接返回 Symbol 的描述。
3. 对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

## 什么是事件监听

addEventListener()方法，用于向指定元素添加事件句柄

第一个参数是事件的类型(如 "click" ).

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。

- true - 事件句柄在捕获阶段执行（外部元素先被触发，在触发内部元素，）
- false- false- 默认。事件句柄在冒泡阶段执行（内部元素先被触发，然后再触发外部元素）

​	

## 介绍一下promise

Promise是一个对象，保存着未来将要结束的事件

1. Promise对象代表一个异步操作，有三种状态，pending进行中，fulfilled已成功，rejected已失败，只有异步操作的结果，才可以决定当前是哪一种状态
2. 一旦状态改变，就不会再变，promise对象状态改变只有两种可能，从pending改到fulfilled或者从pending改到rejected。

## C++,Java，JavaScript这三种语言的区别

### 静态类型还是动态类型来看

1. 静态类型，编译的时候就能够知道每个变量的类型，编程的时候也需要给定类型 如 Java C++

2. 动态类型，运行的时候才知道变量的类型，编程的时候无需指定类型，如 JavaScript ,PHP, Python

### 编译型还是解释型来看

1. 编译型语言，像C、C++，需要编译器编译成本地可执行程序后才能运行。由操作系统CPU直接执行，无需额外的虚拟机等。
2. 解释性语言，像JavaScript、Python，开发语言写好后直接将代码交给用户，用户使用脚本解释器将脚本文件解释执行。
3. Java语言，分为两个阶段。首先经过编译器编译，生成字节码，第二阶段，由Java 虚拟机运行字节码，使用解释器执行这些代码。

##  什么是js的闭包？有什么作用，用闭包写个单例模式

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

   ## Generator 的使用

   1. 分段执行，可以暂停
   2. 可以控制阶段和每个阶段的返回值
   3. 可以知道是否执行到结尾

## 事件委托以及冒泡原理。

1. **事件委托**是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上，委托的优点是：减少内存消耗，节约效率

2. **事件冒泡**就是元素自身的事件被触发后，如果父元素有相同的事件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到document/window，冒泡过程结束。

## 箭头函数

箭头函数与普通函数的区别在于：

1. 箭头函数没有this，所以需要通过查找作用域链来确定this的值，this绑定的就是最近一层非箭头函数的this。
2. 箭头函数没有自己的arguments对象，但是可以访问外围函数的arguments对象
3. 不能通过new关键字调用.

## DOM0级和DOM2级有什么区别，DOM的分级是什么

### DOM0

1. 直接在DOM对象上注册事件，解除事件直接赋值为null
2. 一个DOM对象只能注册一个同类型的函数。

### DOM2

1. 指定了两个方法用于指定和删除事件：`addEventListener` 和 `removeEventListener`

2. 一个DOM 对象可以注册多个相同类型的事件

3. 添加的事件处理程序必须使用`removeEventListener`来移除。

   > 添加的匿名函数将无法移除

## 基本数据类型和引用数据类型的区别

1. 基本数据类型的值在内存中占固定大小空间，保存在栈内存中。引用数据类型的值是对象，保存在堆内存中。
2. 基本数据类型是简单的赋值，一个变量向另一个变量赋值，而引用数据类型赋值是对象的引用，赋值的是指针
3. 基本数据类型的比较是值的比较，引用类型的比较是引用的比较，比较对象的内存地址是否相同
4. 基本类型使用typeof操作符确定类型，引用类型使用instanceof 确定类型

## NaN是什么的缩写（not a number）

NaN是JS中的特殊值，表示非数字，NaN不是数字，但是他的数据类型是数字，它不等于任何值，包括自身，在布尔运算时被当做false。

## JS的作用域类型

**函数作用域**，如果在函数内部我们给未定义的一个变量赋值，这个变量会转变成为一个全局变量

**块作用域**：块作用域把标识符限制在{}中

**改变函数作用域的方法：**

1. eval（），这个方法接受一个字符串作为参数，并将其中的内容视为可执行的代码

2. with关键字：通常被当做重复引用同一个对象的多个属性的快捷方式

##  怎么获得对象上的属性

1. for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型
2. Object.keys（）:返回一个数组，包括所有可枚举的属性名称
3. Object.getOwnPropertyNames:返回一个数组包含不可枚举的属性

##  简单讲一讲ES6的一些新特性

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
> - est参数只包括那些没有给出名称的参数，arguments包含所有参数
> - arguments 对象不是真正的数组，而rest 参数是数组实例，可以直接应用sort, map, forEach, pop等方法
> - arguments 对象拥有一些自己额外的功能
>
> ​	

promise:一种异步编程的解决方案

模块化：其模块功能主要有两个命令构成，export和import

## 写出原生Ajax

``` javascript
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

## ajax返回的状态

0 － （未初始化）对象已建立，还未调用open（）

1 － （初始化）对象已建立，还未调用send()

2 － （发送数据）send方法已发送

3 － （数据传输中）已接受到部分数据

4 － （响应结束）接受所有数据