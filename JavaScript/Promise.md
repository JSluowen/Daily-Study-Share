## 1. 术语

（1）"promise"是一个对象或者函数，该对象或者函数有一个then方法

（2）"thenable"是一个对象或者函数，用来定义then方法

（3）"value"是promise状态成功时的值

（4）"reason"是promise状态失败时的值

## 2.要求

（1）一个promise必须有3个状态，pending，fulfilled(resolved)，rejected当处于pending状态的时候，可以转移到fulfilled(resolved)或者rejected状态。当处于fulfilled(resolved)状态或者rejected状态的时候，就不可变。

promise英文译为承诺，也就是说promise的状态一旦发生改变，就永远是不可逆的。

（2）一个promise必须有一个then方法，then方法接受两个参数：

```javascript
promise.then(onFulfilled,onRejected)
```

其中onFulfilled方法表示状态从pending——>fulfilled(resolved)时所执行的方法，而onRejected表示状态从pending——>rejected所执行的方法。

3）为了实现链式调用，then方法必须返回一个promise

```javascript
promise2=promise1.then(onFulfilled,onRejected)
```



## 实现一个Promise

```javascript
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
```

同时，需要在myPromise的原型上定义链式调用的then方法：

``` javascript
myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
```

