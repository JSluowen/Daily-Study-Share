1. 

2. 如果想自动将用户输入的值转换成数字类型，可以给 v-model 添加 number 修饰符。

   ```javascript
   <input v-model.number="age" type="number">
   ```

3. 自动过滤用户输入的首位空格 ，可以给 v-model 添加 trim 修饰符。

   ```javascript
   <input v-model.trim="msg">
   ```

### 组件基础

1. 组件实例

   ```javascript
   Vue.component('button-counter', {
     data: function () {
       return {
         count: 0
       }
     },
     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
   })
   ```

   定义的组件可以被复用，每个组件都会维护自身的 data 数据，因此每一次用一个组件就会有一个新的实例被创建。

   每一个组件中的 data 都必须是一个具有返回值的函数，而不在是一个对象。这样每一个实例才可以返回一份对象的独立拷贝。

   

   

   