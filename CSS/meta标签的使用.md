### 1. 什么是 meta 标签

中文名叫 **元数据**，用于描述数据的数据，不会显示在页面上，但是机器可以识别。

### 2. 用处

meta 常用来定义页面的说明，关键字，	文档的作者，最后的修改日期和其他的元数据。这些元数据用来服务浏览器，搜索引擎和其他的网络服务。

### 3. meta 主要分为两个属性

name 属性和 http-equiv 属性

**name 属性：** 主要用来描述网页的关键字，叙述等，与之对应的是 content 属性，用来对 name 填入的类型进行具体描述，便与搜索引擎的抓取。

``` javascript
<meta name="参数" content="具体的描述">。
```

1. keywords：用于告诉搜索引擎，你网页的关键字。
2.  description：用来告诉搜索引擎，你网页的主要内容。
3. viewport：用于设计移动端网页。
4. robots：用来告诉爬虫那些页面需要索引，那些页面不需要索引。
5. author：用于标注网页作者。
6. generator：用于标注网页使用什么软件制作的。
7. copyright：用于网页的版权信息。
8. revisit-after：用来设置搜索引擎爬虫重访问的时间。
9. renderer：是为双核浏览器准备的，用于指定双核浏览器以何种方式渲染页面。

**http-equiv属性**：相当于 http 的作用，用来定义 HTTP 参数

``` javascript
<meta http-equiv="参数" content="具体的描述">
```

1. content-type:用于设定网页的字符集，便与浏览器解析和渲染页面。

   ```javascript
   <meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
   ```

2.  X-UA-Compatible：用于告诉浏览器以何种版本来渲染页面。

3.  cache-control：指定请求和响应遵循的缓存机制。

   ```javascript
   <meta http-equiv="cache-control" content="no-cache">
   ```

   + no-cache:先发送请求， 与服务器确认资源是否被更改，如果未被更改，使用缓存。
   + no-store:不允许缓存，每次都需要去服务器请求，下载完整的响应。
   + public：缓存所有的响应，但非必须。
   + private:只为单个用户缓存，因此不允许任何中继进行缓存。（列如 CDN 就不允许缓存 private 响应）
   + maxage：表示从请求开始，这个响应多久内能被缓存和重用，而不去服务器请求。

4. expiress： 用于设定网页的到期时间，时间到了之后，网页必须到服务器上面重新上传。

5. refresh：网页将在设定的时间内自动刷新，并跳转到指定的网址。

   ```javascript
   <meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/">
   ```

6. Set-Cookie：如果网页过期，那么网页存在本地的Cookie也将被删除。

