## new操作符

```js
function Test(name) {
  this.name = name
}
Test.prototype.sayName = function () {
    console.log(this.name)
}
const t = new Test('yck')
console.log(t.name) // 'yck'
t.sayName() // 'yck
```

* new 通过构造函数 Test 创建出来的实例可以访问到构造函数中的属性
* new 通过构造函数 Test 创建出来的实例可以访问到构造函数原型链中的属性，也就是说通过 new 操作符，实例与构造函数通过原型链连接了起来

```js
function Test(name) {
  this.name = name
  return 1
}
const t = new Test('yck')
console.log(t.name) // 'yck'
```

* 构造函数如果返回原始值（虽然例子中只有返回了 1，但是你可以试试其他的原始值，结果还是一样的），那么这个返回值毫无意义

```js
function Test(name) {
  this.name = name
  console.log(this) // Test { name: 'yck' }
  return { age: 26 }
}
const t = new Test('yck')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
```

- 构造函数如果返回值为对象，那么这个返回值会被正常使用

## 结论

构造函数尽量不要返回值。因为返回原始值不会生效，返回对象会导致 new 操作符没有作用。



## 实现new操作符

```js
function create(Con, ...args) {
  let obj = {}
  Object.setPrototypeOf(obj, Con.prototype)
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}


function objectFactory(){
    let obj = {}
    const construcror = [].shift.call(arguments) // 获取第一个参数，也就是源函数
    obj._proto_ = construcror.prototype;
    const res = construcror.apply(obj,arguments);
    return typeof res === 'object'?res:obj;
}
```

实现步骤：

1. 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
2. 然后内部创建一个空对象 `obj`
3. 因为 `obj` 对象需要访问到构造函数原型链上的属性，所以我们通过 `setPrototypeOf` 将两者联系起来。这段代码等同于 `obj.__proto__ = Con.prototype`
4. 将 `obj` 绑定到构造函数上，并且传入剩余的参数
5. 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 `obj`，这样就实现了忽略构造函数返回的原始值