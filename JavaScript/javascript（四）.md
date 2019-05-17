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