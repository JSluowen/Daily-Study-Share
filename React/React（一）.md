## React的生命周期

1. React 生命周期分为三种状态 1. 初始化 2.更新 3.销毁

   ![img](https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg)

**shouldComponentUpdate(nextProps, nextState)**

> react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

## react的组件是通过什么去判断是否刷新的

1. React是用于构建用户界面的JavaScript库。

2. React可以创建交互式UI。
3. 组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据
4. 为应用程序中的每个状态建立的视图，并且React将在数据更改时进行更新，呈现正确的组件

## 说说自己理解的react

通过state是否改变