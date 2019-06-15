## 1.setState 什么时候是同步的，什么时候是异步的？

如果是有React引发的事件处理函数，例如onClick引发的点击事件，会异步调用。而绕过React的监听函数处理的事件和调用setTimeout/setInterval这种异步方法，则会同步执行setState.

**原因：**在React的setState函数实现中，会根据一个变量isBatchingUpdates来判断是同步更新还是放在队列中异步更新，isBatchingUpdates默认是false,表示同步更新，但是有个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true,而当React在调用事件处理函数之前就会调用这batchedUpdates,所以导致setState不会同步更新this.state.

[参考链接](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)

