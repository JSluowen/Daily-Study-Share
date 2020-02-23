## React Hooks 源码分析

### useState

![usestate](/Users/luowen/Documents/学习文档/Daily-Study-Share/static/usestate.png)

### queue 队列更新逻辑

1. 第一次更新

   ```javascript
   假设 update = [update-1]
   
   update.next = update
   [update-1]---next-->[update-1]
   
   Queue.pending = update
   ```

   ![](./1.png)

2. 第二次更新

   ```javascript
   假设：update = update-2
   
   update.next = pending.next;
   
   pending.next = [update-1]
   [update-2]--next-->[update-1]
   
   pending.next = update;
   [update-1]---next--->[update-2]
   
   queue.pending = update;
   如下图所示
   ```

   ![](./2.png)

3.依次类推...

![](./3.png)

queue的规则：

- queue.pending指向最新的一次更新
- pending.next指向第一次更新
- 后面就依次类推



### 参考文档

1. https://juejin.im/post/5dc6e1b35188251ab9183c7d
2. https://react.jokcy.me/book/hooks/hooks-start.html