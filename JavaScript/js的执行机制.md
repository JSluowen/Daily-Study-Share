## 进程与线程

1. 进程描述了 CPU 在**运行指令及加载和保存上下文所需的时间**，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间。

## Event Loop 流程图

### 宏任务 和 微任务

1. 宏任务（macrotask）：主代码块、setTimeout、setInterval
2. 微任务（microtask）：Promise、process.nextTick

原理：在某一个 macrotask 执行完后，在重新渲染与开始下一个宏任务之前，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）;



## Node的执行机制

### timer

timers 阶段会执行 `setTimeout` 和 `setInterval` 回调，并且是由 poll 阶段控制的

### I/O

I/O 阶段会处理一些上一轮循环中的**少数未执行**的 I/O 回调

### idle, prepare

idle, prepare 阶段内部实现

### poll

1. 回到 timer 阶段执行回调
2. 执行 I/O 回调

进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情

1. 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制
2. 如果 poll 队列为空时，会有两件事发生
   * 如果有 `setImmediate` 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调
   * 如果没有 `setImmediate` 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去

当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。

### check

check 阶段执行 `setImmediate`

### close callbacks

close callbacks 阶段执行 close 事件

### 总结

上面介绍的都是 macrotask 的执行情况，对于 microtask 来说，它会在以上每个阶段完成前**清空**microtask 队列

### 参考文献

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

[Node的执行机制和浏览器的执行机制](https://juejin.im/post/5c337ae06fb9a049bc4cd218#heading-12)