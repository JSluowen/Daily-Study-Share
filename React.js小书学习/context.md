## context介绍

1. React.js中context一直被视为一种危险的，不稳定的，可能会被去掉的特性，它能够为某棵组件树提供一个全局变量。
2. 如果某个组件在context中放了一些状态，那么该组件的所有子组件就都能直接获取这些状态而不再需要中间组件的传递，但是该组件的父组件则不能获取。所以context就像是瀑布源头，只能往下不能往上。

![React.js 小书 context 图片](http://huzidaha.github.io/static/assets/img/posts/3BC6BDFC-5772-4045-943B-15FBEC28DAC0.png)

## context的简单用法

根组件 Index.jsx

```javascript
class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
```

子组件 Header.jsx

```javascript
class Header extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
    )
  }
}
```

1. 子组件想要获取context里面的内容,就必须要写` contextTypes` 来声明和验证你要获取状态的类型，如果不写则不能获取到。
2. 父组件需要使用写`childContextTypes`来声明context的状态，使用`getChildContext`方法来返回context定义的对象
3. `PropTypes` 需要下载第三方库 `prop-types`

