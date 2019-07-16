### 1.setState 什么时候是同步的，什么时候是异步的？

如果是有React引发的事件处理函数，例如onClick引发的点击事件，会异步调用。而绕过React的监听函数处理的事件和调用setTimeout/setInterval这种异步方法，则会同步执行setState.

**原因：**在React的setState函数实现中，会根据一个变量isBatchingUpdates来判断是同步更新还是放在队列中异步更新，isBatchingUpdates默认是false,表示同步更新，但是有个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true,而当React在调用事件处理函数之前就会调用这batchedUpdates,所以导致setState不会同步更新this.state.

[参考链接](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)

### 2. setState 的异步更新

setState 是通过一个队列来实现 stae 的更新的，当执行setState时，会将需要更新的 state **浅合并**后放入

状态队列，而不会立即更新 state；而通过 this.state 修改的值则不会放入状态队列里面。

> 官方文档介绍：将 nextState 浅合并到 state 中，这是事件处理函数和服务器请求回调函数中触发UI 更新的主要方法，不保证 setState 会同步执行，考虑性能问题，可能会对多次调用执行做批处理。

