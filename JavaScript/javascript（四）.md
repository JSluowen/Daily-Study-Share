##　实现sleep函数

```javascript
function sleep(d){
    console.log('start')
    var t = Date.now();
    while(Date.now()- t <= d);
} 
sleep(3000);
console.log('end')
```

## 怎么判断一个属性是否在对象中

### 点( . )或者方括号( [ ] )

　**通过点或者方括号可以获取对象的属性值，如果对象上不存在该属性，则会返回undefined**

```javascript
// 创建对象
let test = {name : 'lei'}
// 获取对象的自身的属性
test.name            //"lei"
test["name"]         //"lei"
// 获取不存在的属性
test.age             //undefined
```

###  in 运算符

**如果指定的属性在指定的对象或其原型链中，则in 运算符返回true**

```javascript
'name' in test        //true
'un' in test             //true
'toString' in test    //true
'age' in test           //false
```

> 注意：这种方式的局限性就是无法区分自身和原型链上的属性

### hasOwnProperty()

```javascript
test.hasOwnProperty('name')        //true   自身属性
test.hasOwnProperty('age')           //false  不存在
test.hasOwnProperty('toString')    //false  原型链上属性
```

> 　可以看到，只有自身存在该属性时，才会返回true。适用于只判断自身属性的场景。



## 创建DOM节点，添加，删除，替换，克隆对应的 api 是什么

### 创建节点

document.createElement();*//创建元素*

document.createTextNode();*//创建文本节点*

### 添加节点

var ele = document.getElementById("my_div");
var oldEle = document.createElement("p");
var newEle=document.createElement("div");

ele.appendChild(oldEle);

### 移除

ele.removeChild(oldEle);

### 替换

ele.replaceChild(newEle,oldEle)

### 克隆

var cEle = oldEle.cloneNode(true);*//深度复制，复制节点下面所有的子节点*

cEle = oldEle.cloneNode(false);*//只复制当前节点，不复制子节点*

## 正则贪婪模式匹配 非贪婪模式匹配 

> 贪婪模式在整个表达式匹配成功的前提下，尽可能多的匹配，而非贪婪模式在整个表达式匹配成功的前提下，尽可能少的匹配

## FileReader

> `FileReader` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 或 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象指定要读取的文件或数据。

## Base64编码的原理

Base64可以将ASCII字符串或者是二进制编码成只包含A—Z，a—z，0—9，+，/ 这64个字符（ 26个大写字母，26个小写字母，10个数字，1个+，一个 / 刚好64个字符）。

##  Promise 是什么，Promise.all() 和 Promise.race() 怎么用

### Promise.all()

> promise.all主要用于一次性执行多个异步方法，并且按传入顺序执行

```javascript
function fun1(num = -1) {
    // 在fun1中返回一个promise对象
    return new Promise(function(resolve, reject) {
        // 为了体现是异步接口，这里使用一个定时器，延迟3秒
        setTimeout(resolve, 3000, 'fun1');
    })
};
function fun2(num2 = 200) {
    // 在fun2中也返回一个promise对象
    return new Promise(function(resolve, reject) {
        // 为了和fun1区分开来，fun2延迟1秒
        setTimeout(resolve, 1000, 'fun2');
    })
}
// 由于fun1和fun2是方法，所以使用fun1()执行该方法
Promise.all([fun1(), fun2()]).then(function(result) {
    console.log(result) // 输入应该为 ['fun1','fun2']
})
```

### Promise.race()

> 在执行多个异步操作中，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃

```javascript
var fun1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000, 'fun1');
});
var fun2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, 'fun2');
});
// *注：这里使用的示例和promise.all用的示例类似，
// 可是没有用()执行，因为fun1就是一个promise对象，不需要执行
Promise.race([fun1, fun2]).then(function(result) {
    console.log(result); // 'fun2'   因为fun2比较早执行结束
});
```

