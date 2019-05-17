## nodejs自己编写一个服务器代码

```javascript

//nodejs之服务器创建（几行代码即可搞定一个服务器）
const http = require("http");
 
//第一步：创建一个服务器http.Server对象（有监听端口和监听request方法）
let server = http.createServer();
 
//监听端口
server.listen(8080, (req, resp) => {
    console.log("服务器80端口已经监听...");
})
 
//监听request请求，如果请求，那么response响应数据返回到浏览器显示！
server.on("request", (request, response) => {
    //request请求数据和response响应数据都是以流的方式操作，查看官方文档！
    response.write("<p><span>响应到浏览器的第一条数据helloword！！！</span></p>", encoding = "utf8");
    //流的写入最后必须结束！
    response.end();
}
```

1. 引入http 模块

2. http.createServer() 创建服务器 对象
3. server.on(）监听request 请求
4. server.listen()监听端口号