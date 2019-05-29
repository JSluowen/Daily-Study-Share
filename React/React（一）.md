## React的生命周期

1. React 生命周期分为三种状态 1. 初始化 2.更新 3.销毁

   ![img](https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg)

**shouldComponentUpdate(nextProps, nextState)**

> react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

## 你理解的React

1. React是用于构建用户界面的JavaScript库。

2. React可以创建交互式UI。
3. 组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据
4. 为应用程序中的每个状态建立的视图，并且React将在数据更改时进行更新，呈现正确的组件

## react 生命周期函数 16.0以后的有什么区别，说一下新的生命周期函数

### getDerivedStateFromProps

1. getDerivedStateProps 生命周期函数是一个静态函数，所以函数体内不能访问this。
2. 只要进行挂载或更新组件，都会调用 getDerivedStateFromProps 生命周期函数。

### getSnapshotBeforeUpdate

getSnapshotBeforeUpdate。这函数会在render之后执行，而执行之时DOM元素还没有被更新，给了一个机会去获取DOM信息，计算得到一个snapshot，这个snapshot会作为componentDidUpdate的第三个参数传入

### React合成事件和原生事件区别

React合成事件一套机制：React并不是将click事件直接绑定在dom上面，而是采用**事件冒泡**的形式冒泡到document上面，然后React将事件封装给正式的函数处理运行和处理。

## 什么是“纯函数”

- 纯函数是指 不依赖于且不改变它作用域之外的变量状态 的函数。
- 简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。

## React的组件优化

1. 对于事件绑定，我们应该在按钮内声明， constructor内绑定，应该避免事件在按钮内声明时绑定

2. 对于组件嵌套，当父组件往子组件传值时，key和value在render()内先定义再使用，不然每一次使用子组件时都会生成新的对象进行传递。

3. #### shouldComponentUpdate 来比较前后两次props/state 是否改变，来决定是否重新渲染界面

## React单向数据流

1. React是单向数据流，数据主要从父节点传递到子节点
2. 如果顶层（父级）的某个props改变了，React会重渲染所有的子节点。

## React怎么判断什么时候该重新渲染组件？

1. **只有在组件的state变化时才会出发组件的重新渲染**
2. 

## react 受控组件和非受控组

### 受控组件

1. 受控组件一般都是针对表单而言的，表单默认值可以映射到状态上。
2. 当通过onChange事件绑定事件来改变它对应的状态时，值也会随之改变。

### 非受控组件

1. 即组件不受状态的控制，数据的获取就相当于在操作DOM节点。
2.  通过在DOM节点上用ref属性，并使用函数，将参数挂载到实例的属性上。
3.  在构造函数中通过React.createRef()创建一个引用，将这个引用赋值给DOM节点对应的ref属性，我们就可以通过这个引用获取对应的值

## 高阶组件

1. 高阶组件是参数为组建，返回值为新组件的函数

## React Diff

### 什么是Diff算法

就是算出虚拟Dom 转换成真正的DOM的最少操作过程的算法。

### Diff策略（三种）

1. 跨层级移动DOM节点的过程特别少，可以忽略不计
2. 相同类的两个组件，生成相同的树形结构，不同类生成不同的树形结构。
3. 同一层级的一组子节点，通过唯一的ID区分

**tree diff**

 对树分层比较，只是比较同一层次的节点，如果节点不存在，则该节点和子节点就会完全被删除不会再继续比较

> **如果DOM节点出现了跨层级操作,diff会咋办呢？**
>
> 删除旧节点，创建新节点

**component diff**

1. 同一类型的组件，层级比较
2. 同一类型的组件，A变化成B,Virtual DOM 不会有任何的变化
3. 不同类型的组件，将要改变的组件会被判定成 dirty component ,从而替换整个组件的所有节点

**element diff**

当节点处于同一层级时，diff提供三种节点操作：**删除、插入、移动**

[React之diff算法](https://www.jianshu.com/p/3ba0822018cf)

