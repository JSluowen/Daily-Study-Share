## html里面的meta标签有哪些属性

> meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据

### name属性

> name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取

```html
<meta name="参数" content="具体的描述">
```

**name属性共有以下几种参数**

1.   keywords(关键字)

   说明：用于告诉搜索引擎，你网页的关键字

   ```html
   <meta name="keywords" content="Lxxyx,博客，文科生，前端">
   ```

2. description(网站内容的描述)

   用于告诉搜索引擎，你网站的主要内容

   ```html
   <meta name="description" content="文科生，热爱前端与编程。目前大二，这是我的前端博客">
   ```

3.  viewport(移动端的窗口)

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

4. robots(定义搜索引擎爬虫的索引方式)

   说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。content的参数有  all,none,index,noindex,follow,nofollow。默认是all

   ```html
   <meta name="robots" content="none">
   ```

   后面省略….

###  http-equiv属性

相当于HTTP的作用，比如说定义些HTTP参数啥的。

```html
<meta http-equiv="参数" content="具体的描述">
```

### 文章参考

[HTML meta标签总结与属性使用介绍](https://www.cnblogs.com/wangyang108/p/5995379.html)

## rem em px

1. px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的

2. em是相对长度单位。相对于当前对象内文本的字体尺寸

   em特点 

   * em的值并不是固定的；
   * em会继承父级元素的字体大小。

3.  rem是[CSS3](http://www.html5cn.org/portal.php?mod=list&catid=16)新增的一个相对单位,使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素

 ## 常用的块级元素和行内元素

**快级元素**：div、p、h1~h6、ul、ol、table、Html5新增加的（header、section、aside、footer）

**行内元素**：span、img、a、lable、input、button、small、strong

**块级元素的特点：**

 	1. 独占一行
 	2. 宽度和高度可控
 	3. 宽度没有设置时，默认为100%
 	4. 可以包含块级元素和行内元素

**行内元素的特点：**

 	1. 不独占一行
 	2. 宽度，高度不可控
 	3. 宽高就是内容的高度，不可以改变
 	4. 行内元素只能包含行内元素，不能包含块级元素



