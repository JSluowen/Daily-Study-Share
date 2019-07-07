### HTML5新增的元素

1. 首先html5为了更好的实践web语义化，增加了header section footer aside nav main article figure等语义化标签
2. 新的input类型 color date datetime datetime-local email
3. 新的表单控件calander date time email url search
4. 在存储方面，提供了sessionStorage，localStorage,和离线存储，通过这些存储方式方便数据在客户端的存储和获取
5. 多媒体方面规定了音频和视频元素audio和vedio
6. 另外还有地理定位，canvas画布，拖放，多线程编程的web worker和websocket协议

### 支持HTML5新标签

IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签.

### HTML5离线存储的原理

离线存储是基于一个`.appcache` 文件的缓存机制，通过这个文件上中的解析清单进行离线储存。

### 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？

在线情况下，浏览器如果发现html有manifest属性，就会去查找对应的manifest文件，根据manifest文件中的内容去下载对应的资源，如果是第一次访问，浏览器就会下载资源同时将资源进行离线存储，如果不再是第一次访问，浏览器就会取出离线缓存的资源来加载页面，然后比对新旧两个manifes文件，如果相同，不做任何操作，如果不同，浏览器就会重新下载资源进行离线缓存，同时更新manifest文件。

离线的情况下，浏览器就会直接使用离线缓存的资源。

###  webSocket如何兼容低浏览器

使用轮询或长连接的方式实现伪webSocket。

使用flash或其他方式实现一个webSocket客户端。

### title与h1的区别、b与strong的区别、i与em的区别？

 title只是表示标题，没有明确的意义，而h1则表示层次明确的标题，对网页信息的抓取有很大的影响。

b是强调作用，而strong则表示重点内容，使用阅读浏览设备的时候，会加强阅读语气。

i表示斜体，而em表示强调文本。



