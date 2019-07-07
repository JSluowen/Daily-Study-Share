## 1. 画一条0.5px的线

1. 采用meta viewport的方式
2. transform: scale() 
3. 线性渐变linear-gradient

## 2. link标签和@import标签的区别

> <style>
>
> ```css
>    @import url(地址)；
> 
>    @import url("地址")；
> 
>    @import “地址”；
> ```
>
>  </style>

link属于html标签，而@import是css提供的

**页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。**

link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。

link方式样式的权重高于@import的。

##  3. BFC（块级格式化上下文，用于清除浮动，防止margin重叠等)

BFC也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素

那些元素会生成BFC：

1. 根元素

2. float不为none的元素
3. position为fixed和absolute的元素
4. display为inline-block、table-cell、table-caption，flex，inline-flex的元素
5. overflow不为visible的元素

## 4. 说一下块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度

行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失

效。

## 5. visibility=hidden, opacity=0，display:none

1. opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件
2. visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
3. display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

## 6. 浮动清除

1. 使用带clear属性的空元素

   在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。

2. 使用CSS的overflow属性

   给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动

3. 使用CSS的:after伪元素

   给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动

## 7. 怎么样让一个元素消失

display:none;  visibility:hidden;  opacity: 0;  clip-path: polygon(100% 100%);  position:absoulte

## 8. inline-block、inline和block的区别；为什么img是inline还可以设置宽高

Block是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding水平垂直方向都有效。

Inline：设置width和height无效，margin,padding在竖直方向上无效,在水平方向有效，前后无换行符

Inline-block：能设置宽度高度，margin/padding水平垂直方向 都有效，前后无换行符



> img既是行内元素 又是置换元素
>
> 置换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容

## 9. line-height和height的区别

line-height一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height一般是指容器的整体高度，

## 11. 设置一个元素的背景颜色，背景颜色会填充哪些区域？

background-color设置的背景颜色会填充元素的content、padding、border区域，

## 12. 重绘 和重排

**Reflow（回流，重排）**：当它发现了某个部分发生了变化影响了布局，那就需要倒回去重新渲染。

**Repaint（重绘）**： 果只是改变了某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的repaint

**引起重排重绘的原因有：**

添加或者删除可见的DOM元素，

元素尺寸位置的改变

浏览器页面初始化，

浏览器窗口大小发生改变，重排一定导致重绘，重绘不一定导致重排

**减少重绘重排的方法有：**

1. 不在布局信息改变时做DOM查询，

2. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className
3. 对于多次重排的元素，比如说动画。使用绝对定位脱离文档流，使其不影响其他元素
4. 千万不要使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。

## 14.CSS3新增了很多的属性

1. CSS3边框：

   - border-radius：CSS3圆角边框。

   - box-shadow：CSS3边框阴影
   - border-image：CSS3边框图片

2. CSS3背景：

   - background-size： 属性规定背景图片的尺寸
   - background-origin ：属性规定背景图片的定位区域

3. CSS3文字效果：

   - text-shadow： 可向文本应用阴影
   - word-wrap :单词太长的话就可能无法超出某个区域，允许对长单词进行拆分

## 15.元素竖向的百分比设定是相对于容器的高度吗？

对于元素的高度来说，百分比是相当于元素所在容器高度的百分比来计算的，而对于元素的margin/padding的top/bottom 是相当于当前元素所在容器的宽度来计算的。

## 16.浮动的特性

1. 包裹性（包裹和自适应性）

   > 包裹：假设浮动元素父元素宽度200px,浮动元素的子元素是一个128px宽度的图片，则此时浮动元素宽度也为128px.
   >
   > 自适应性：如果子元素不只是一张图片，还有文字，则浮动元素自适应父元素的宽度，为200px

2. 块状化并格式化上下文

   > 元素的float属性值不为none,则其display的计算值就是block 或者 table

3. 破坏文档流

4. 没有任何margin合并

## 17.盒模型

1. 盒模型的组成大家肯定都懂，由里向外content,padding,border,margin.

2. 盒模型是有两种标准的，一个是标准模型，一个是IE模型。

   > 标准模型中，盒模型的宽高只是内容（content）的宽高
   >
   > IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。

标准盒模型下元素的 box-sizing 属性（IE8+）默认值为 content-box，将它设置成 border-box 可转换为 IE 盒模型。在实际应用场景中，若想控制元素总宽高保持固定，这个设置很有用。

## 18.Css Sprite（优点）(精灵图)

1. 减少图片的字节。
2. 减少网页的http请求，从而大大的提高页面的性能。
3. 解决了网页设计师在图片命名上的困扰，只需对一张集合的图片上命名就可以了，不需要对每一个小元素进行命名，从而提高了网页的制作效率。
4. 更换风格方便，只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变。维护起来更加方便。

> css background-position

## 19.float和position一起用是什么效果

> float浮动与position同时使用并不会冲突，前者是使元素脱离标准流，浮动在文档流上；而后者是使元素相对自身的移动定位，虽浮动但占据原有位置。当两者同时使用时，不会发生冲突，反而使元素同时具有两者特性，即既可以相对自身移动定位，又可以浮动不占位置

## 20.rem用过吗？做不同手机的适配怎么做？

[手机端页面自适应解决方案—rem布局进阶版](https://www.jianshu.com/p/985d26b40199)

## 21.为什么transform比margin的性能好

1. 主线程：用于计算css样式，页面布局等，将元素位置一个个的位图,然后将位图交给合成线程
2. 合成线程：将主线程传过来的各种位图绘制到屏幕上，在通知主线程更新页面可见或即将可见的位图。

原因：margin 每个一个像素的改变，主线程都是需要计算一次

，而transform 只需要提交一次的改变交给主线程

## 22.为什么要初始化Css的样式

> 因为各种浏览器的兼容性不同，不同浏览对有些标签的默认值是不同的，如果没对css初始化，不同页面往往会产生差异。

## 24.Js 获取元素的宽度和高度

```javascript
var width = document.getElementById('id').offsetWidth;
var height = document.getElementById("id").offsetHeight;
```

## 25.在网页中的应该使用奇数还是偶数的字体？

1. 偶数字号更加容易和页面其他字号形成比例关系。
2. 低版本的浏览器IE6会把偶数字体强制转换成奇数字体。

## 26.CSS里的visibility属性有个collapse属性值

对于普通元素来说他会将其隐藏掉，效果和display：none 一样，对于table来说，会将其页面隐藏，但是会占据空间。

## 27.display:inline-block 的元素会产生间隙的解决方法

使用margin负值 使用font-size：0，word-spacing：0，letter-spacing:负值

## 28.png、jpg、gif 这些图片格式解释一下

1. png 8能更好替代gif ，支持透明，动画，无损图像格式，他的文件体积比gif更小，png24透明，不止256色。
2. jpg 支持上百万种颜色，是有损压缩，不支持透明和动画。适用于存储照片和展示更加生动的图像效果的场景。
3. gif 图，支持透明，动画，无损压缩，缺点只有256中颜色。适用于：对于色彩要求不高同时文件体积较小的场景，例如logo
4. svg是无损的，矢量图，他最大的不同就是，它是由曲线和直线绘制成的，当其放大的时候，他不会出现失真现象，适合制作企业级的logo以及icon图标。
5. webp 是一种谷歌公司推出的一种新性的特性，支持无损和有损两种格式，具备更小的文件体积。