## cookie sessionStorage localStorage区别

Cookie和session都可用来存储用户信息，cookie存放于客户端，session存放于服务器端，因为cookie存放于客户端有可能被窃取，所以cookie一般用来存放不敏感的信息，比如用户设置的网站主题，敏感的信息用session存储，比如用户的登陆信息，cookie可以服务器端响应的时候设置，也可以客户端通过JS设置cookie会在请求时在http首部发送给客户端，cookie一般在客户端有大小限制，一般为4K，

下面从几个方向区分一下cookie，localstorage，sessionstorage的区别

1、生命周期：

Cookie：可设置失效时间，否则默认为关闭浏览器后失效

Localstorage:除非被手动清除，否则永久保存

Sessionstorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除

2、存放数据：

Cookie：4k左右

Localstorage和sessionstorage：可以保存5M的信息

3、http请求：

Cookie：每次都会携带在http头中，如果使用cookie保存过多数据会带来性能问题

其他两个：仅在客户端即浏览器中保存，不参与和服务器的通信

4、应用场景：

从安全性来说，因为每次http请求都回携带cookie信息，这样子浪费了带宽，所以cookie应该尽可能的少用，此外cookie还需要指定作用域，不可以跨域调用，限制很多，但是用户识别用户登陆来说，cookie还是比storage好用，其他情况下可以用storage，localstorage可以用来在页面传递参数，sessionstorage可以用来保存一些临时的数据，防止用户刷新页面后丢失了一些参数，

## cookie session区别

1. cookie数据存放在客户的浏览器上，session数据放在服务器上。

2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   考虑到安全应当使用session。

3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用COOKIE。

4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。



## 介绍知道的http返回的状态码

1. 100    Continue    继续。客户端应继续其请求
2. 101    Switching Protocols    切换协议。服务器根据客户端的请求切换协议
3. 200    OK    请求成功。一般用于GET与POST请求
4. 201    Created    已创建。成功请求并创建了新的资源
5. 202    Accepted    已接受。已经接受请求，但未处理完成
6. 203    Non-Authoritative Information    非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
7. 204    No Content    无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
8. 205    Reset Content    重置内容。服务器处理成功
9. 206    Partial Content    部分内容。服务器成功处理了部分GET请求
10. 300    Multiple Choices    多种选择。请求的资源可包括多个位置
11.  **301  Moved Permanently    永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替  301是永久重定向**
12. **302    Found    临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI  302是临时重定向**
13. 303    See Other    查看其它地址。与301类似。使用GET和POST请求查看
14. **304    Not Modified    未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源**
15. 305    Use Proxy    使用代理。所请求的资源必须通过代理访问
16. 307    Temporary Redirect    临时重定向。与302类似。使用GET请求重定向
17. **400    Bad Request    客户端请求的语法错误，服务器无法理解**
18. **401    Unauthorized    请求要求用户的身份认证**
19. **403    Forbidden    服务器理解请求客户端的请求，但是拒绝执行此请求**
20. **404    Not Found    服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面**
21. 405    Method Not Allowed    客户端请求中的方法被禁止
22. 406    Not Acceptable    服务器无法根据客户端请求的内容特性完成请求
23. 408    Request Time-out    服务器等待客户端发送的请求时间过长，超时
24. 410    Gone    客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码
25. 413    Request Entity Too Large    由于请求的实体过大，服务器无法处理，因此拒绝请求。
26. 414    Request-URI Too Large    请求的URI过长（URI通常为网址），服务器无法处理
27. 415    Unsupported Media Type    服务器无法处理请求附带的媒体格式
28. **500    Internal Server Error    服务器内部错误，无法完成请求**
29. 501    Not Implemented    服务器不支持请求的功能，无法完成请求
30. 502    Bad Gateway    作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
31. 503    Service Unavailable    由于超载或系统维护，服务器暂时的无法处理客户端的请求。
32. 504    Gateway Time-out    充当网关或代理的服务器，未及时从远端服务器获取请求
33. 505    HTTP Version not supported    服务器不支持请求的HTTP协议的版本，无法完成处理

## http常用请求头

| 协议头          | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| Cookie          | 由之前服务器通过Set-Cookie（见下文）设置的一个HTTP协议Cookie |
| Accept          | 可接受的响应内容类型（Content-Types）。                      |
| Accept-Charset  | 可接受的字符集                                               |
| Accept-Encoding | 可接受的响应内容的编码方式。                                 |
| Authorization   | 用于表示HTTP协议中需要认证资源的认证信息                     |
| Cache-Control   | 用来指定当前的请求/回复中的，是否使用缓存机制。              |
| Connection      | 客户端（浏览器）想要优先使用的连接类型                       |
| Content-Type    | 请求体的MIME类型 （用于POST和PUT请求中）                     |
| Host            | 表示服务器的域名以及服务器所监听的端口号                     |



## 前端优化

降低请求量：合并资源，减少HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。

加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。

缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。

渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。



## GET和POST的区别

get参数通过url传递，post放在request body中。

get请求在url中传递的参数是有长度限制的，而post没有。

get请求只能进行url编码，而post支持多种编码方式

get请求参数会被完整保留在浏览历史记录里，而post中的参数不会被保留

GET产生的URL地址可以被Bookmark，而POST不可以

GET在浏览器回退时是无害的，而POST会再次提交请求。

**GET产生一个TCP数据包；POST产生两个TCP数据包。**

1. 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

2. 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。



[GET和POST两种基本请求方法的区别](https://www.cnblogs.com/logsharing/p/8448446.html)



##  HTTP支持的方法

> **GET, POST, HEAD, OPTIONS, PUT, DELETE, TRACE, CONNECT**



## HTML5新增的元素

1. 首先html5为了更好的实践web语义化，增加了header section footer aside nav main article figure等语义化标签
2. 新的input类型 color date datetime datetime-local email
3. 新的表单控件calander date time email url search
4. 在存储方面，提供了sessionStorage，localStorage,和离线存储，通过这些存储方式方便数据在客户端的存储和获取
5. 多媒体方面规定了音频和视频元素audio和vedio
6. 另外还有地理定位，canvas画布，拖放，多线程编程的web worker和websocket协议

## CSS3新增了很多的属性

1. CSS3边框：

   + border-radius：CSS3圆角边框。

   - box-shadow：CSS3边框阴影
   - border-image：CSS3边框图片

2. CSS3背景：

   + background-size： 属性规定背景图片的尺寸
   + background-origin ：属性规定背景图片的定位区域

3. CSS3文字效果：

   + text-shadow： 可向文本应用阴影
   + word-wrap :单词太长的话就可能无法超出某个区域，允许对长单词进行拆分

   …..

## 浏览器在生成页面的时候，会生成那两颗树？

构造两棵树，DOM树和CSSOM规则树

当浏览器接收到服务器相应来的HTML文档后，会遍历文档节点，生成DOM树，

CSSOM规则树由浏览器解析CSS文件生成，



## csrf和xss**的网络攻击及防范**

1. **CSRF**：跨站请求伪造，可以理解为攻击者盗用了用户的身份，以用户的名义发送了恶意请求

   解决方案： 使用验证码，检查https头部的referer，使用token 

2. **XSS**：跨站脚本攻击，是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取cookie，或者其他用户身份信息，可以分为存储型和反射型，存储型是攻击者输入一些数据并且存储到了数据库中，其他浏览者看到的时候进行攻击，反射型的话不存储在数据库中，往往表现为将攻击代码放在url地址的请求参数中

   解决方案：cookie设置httpOnly属性，对用户的输入进行检查，进行特殊字符过滤

## 介绍HTTP协议(特征)

> HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。

