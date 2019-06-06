## 设计模式

单例模式： 保证一个类仅有一个实例，并提供一个访问他的全局访问点例如框架中的数据库连接

工厂模式

> 目的是为了创建对象，通常在类或者类的静态方法中实现
>
>  	1. 当创建相似对象时执行重复的操作
>  	2. 在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口

观察者模式： 一个对象通过添加一个方法使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。例如实现实现消息推送

装饰者模式： 不修改原类代码和继承的情况下动态扩展类的功能，例如框架的每个Controller文件会提供before和after方法

迭代器模式： 提供一个方法顺序访问一个聚合对象中各个元素。

## web socket and web worker

> web socket提供更高效的传输协议，web worker提供多线程提高web应用计算效率

## Web Socket

> 
>
> worker的主线程和子线程间通过postMessage()来发送消息，通过向 web worker 添加一个 "onmessage" 事件监听器来获取接受到的消息。websocket是一种协议，本质上和HTTP，TCP一样。协议是用来说明数据是如何传输。

URL前缀是`ws://` 不加密传输

URL前缀是`wss://` 加密传输

### web worker

> web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。
>
> worker的主线程和子线程间通过postMessage()来发送消息，通过向 web worker 添加一个 "onmessage" 事件监听器来获取接受到的消息。

## Js中String Array Math内部常用的方法

### String

1. charAt():返回指定位置的字符
2. concat() 连接两个或多个字符
3. toLowerCase(）:把字符串转换为小写
4. toUpperCase()  ：把字符串转换为大写
5. indexOf()：返回字符串中检索指定字符最后一次出现的位置
6. replace()：替换与正则表达式匹配的子串
7. split()：把字符串分割为子字符串数组



### Array

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

   ### Math
   ceil floor max min pow round random

## js中new和object.create区别

| 比较     | new                     | Object.create           |
| -------- | ----------------------- | ----------------------- |
| 构造函数 | 保留原构造函数属性      | 丢失原构造函数属性      |
| 原型链   | 原构造函数prototype属性 | 原构造函数/（对象）本身 |
| 作用对象 | function                | function和object        |

## BOM对象

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

## 什么是元编程

> 能“介入”的对象底层操作进行的过程中，并加以影响。元编程中的 元 的概念可以理解为 程序 本身。”元编程能让你拥有可以扩展程序自身能力“
>
> 参考 : [怎么理解元编程](<https://www.zhihu.com/question/23856985> )

## Reflect 和 Proxy 

### Reflect 

Reflect 是一个内置对象，它提供了拦截JavaScript操作的方法，他自身没有构造函数，不能与new操作符一起使用，或者将其作为一个对象来调用。它的所有属性和方法都是静态的。

## forEach()能够中断吗

不能中断，只能抛出异常，这样的话，forEach是错误的

## 函数提升要比变量提升

函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。

## fetch和ajax**的认识和区别**

**fetch**：

1. fetch是基于Promise实现的
2. fetchfetch请求默认是不带cookie的，需要设置
3. 服务器返回400 500 状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject。

A**ajax**:

1. 是XMLHTTPRequest的一个实例
2. 只有当状态为200或者304时才会请求成功