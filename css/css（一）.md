## 画一条0.5px的线

1. 采用meta viewport的方式
2. transform: scale() 
3. 线性渐变linear-gradient

## link标签和@import标签的区别

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

##  BFC（块级格式化上下文，用于清除浮动，防止margin重叠等)

BFC也就是常说的块格式化上下文，这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素

那些元素会生成BFC：

1. 根元素

2. float不为none的元素
3. position为fixed和absolute的元素
4. display为inline-block、table-cell、table-caption，flex，inline-flex的元素
5. overflow不为visible的元素

## 说一下块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置margin和pading以及高度和宽度

行元素：不会独占一行，width和height会失效，并且在垂直方向的padding和margin会失

效。

## visibility=hidden, opacity=0，display:none

1. opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件
2. visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
3. display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

## 浮动清除

1. 使用带clear属性的空元素

   在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。

2. 使用CSS的overflow属性

   给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动

3. 使用CSS的:after伪元素

   给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动

## 怎么样让一个元素消失

display:none;  visibility:hidden;  opacity: 0;  clip-path: polygon(100% 100%);  position:absoulte

## inline-block、inline和block的区别；为什么img是inline还可以设置宽高

Block是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding水平垂直方向都有效。

Inline：设置width和height无效，margin,padding在竖直方向上无效,在水平方向有效，前后无换行符

Inline-block：能设置宽度高度，margin/padding水平垂直方向 都有效，前后无换行符



> img既是行内元素 又是置换元素
>
> 置换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容

## line-height和height的区别

line-height一般是指布局里面一段文字上下行之间的高度，是针对字体来设置的，height一般是指容器的整体高度，

## 设置一个元素的背景颜色，背景颜色会填充哪些区域？

background-color设置的背景颜色会填充元素的content、padding、border区域，

## 重绘 和重排

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

