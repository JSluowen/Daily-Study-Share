## Set

它类似于数组，但是成员的值都是唯一的，没有重复的值。

1. Set`本身是一个构造函数，用来生成 Set 数据结构，通过`add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

2. `Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```js 
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

```

3. 向 Set 加入值的时候，不会发生类型转换，所以`5`和`"5"`是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（`===`），主要的区别是`NaN`等于自身，而精确相等运算符认为`NaN`不等于自身。

```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
```

4. 两个对象总是不相等的。

```js
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

总结

* `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
* `Set.prototype.size`：返回`Set`实例的成员总数。
* `add(value)`：添加某个值，返回 Set 结构本身。
* `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
* `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
* `clear()`：清除所有成员，没有返回值。

## WeakSet

`WeakSet `结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

1. `WeakSet `的成员只能是对象，而不能是其他类型的值。
2. `WeakSet `中的对象都是弱引用，即垃圾回收机制不考虑` WeakSet `对该对象的引用

### 语法

1. `WeakSet` 是一个构造函数，可以使用`new`命令，创建` WeakSet` 数据结构。
2. `WeakSet `可以接受一个数组或类似数组的对象作为参数

- `**WeakSet.prototype.add(value)**`：向 `WeakSet` 实例添加一个新成员。
- `**WeakSet.prototype.delete(value)**`：清除 `WeakSet` 实例的指定成员。
- `**WeakSet.prototype.has(value)**`：返回一个布尔值，表示某个值是否在 

## Map

1. 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

   ```js
   const m = new Map();
   const o = {p: 'Hello World'};
   
   m.set(o, 'content')
   m.get(o) // "content"
   
   m.has(o) // true
   m.delete(o) // true
   m.has(o) // false
   ```

   

2. 如果对同一个键多次赋值，后面的值将覆盖前面的值。

   ```js
   const map = new Map();
   
   map
   .set(1, 'aaa')
   .set(1, 'bbb');
   
   map.get(1) // "bbb"
   ```

**注意：**只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

## WeakMap

`WeakMap`与`Map`的区别有两点

1. `WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。

2. `WeakMap`的键名所指向的对象，不计入垃圾回收机制。

存在的目的

它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

``` js
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```

