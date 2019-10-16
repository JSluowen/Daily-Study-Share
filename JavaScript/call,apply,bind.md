## call

```js
Function.prototype.myCall = function(context){
    if(typeof this !=='function'){
        throw new TypeError('这不是一个函数');
    }
    context = context || window;
  	let fn = Symbol(); // 防止已在fn已存在context 中
    context[fn]  = this;
    const args = [...arguments].slice(1);
    const result = context[fn](...args);
    delete context[fn];
    return result;
}
```

## apply

```js
Function.prototype.myApply = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('这不是个函数');
    }
    context = context || window;
  	let fn = Symbol()
    context[fn] = this;
    let result;
    if(arguments[1]){
            result = context[fn](...arguments[1])
    }else{
            result = context[fn];
    }
    delete context.[fn];
    return result
}
```



## bind

```js
Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    const _this = this;
    const args = [...arguments].splice(1);
    
    return function F(){
        if(this instanceof F){
            return new _this(...args,...arguments)  // 作为构造函数返回
        }
        return _this.apply(context,args.concat(...arguments)); // 作为普通函数返回
    }
}
```



## 使用场景

### 1.合并两个数组

```javascript
Array.prototype.push.apply(targetArray,sourceArray)
```

当第二个数组参数过大时，处理方式，将参数数组切块后循环传入目标数据

```javascript
funcition concatOfArray(array){
	const QUANTUM = 32768
	for (var i = 0, len = arr2.length; i < len; i += QUANTUM) {
        Array.prototype.push.apply(
            arr1, 
            arr2.slice(i, Math.min(i + QUANTUM, len) )
        );
    }
    return arr1;
}
```

### 2. 获取数组中的最大值和最小值

```javascript
let num = [5, 458 , 120 , -215]
Math.max.apply(Math,nums)
Math.max.call(Math,...nums)
```

### 3. 验证是否时数组

```javascript
Object.prototype.toString.call(obj) === '[object Array]'
```

⚠️：这种方法无法判断构造函数的实例对象，所以需要使用 instancof

### 4 使得类数组对象可以使用数组方法

```javascript
Array.prototype.slice.call(arguments)
```

也可以使用 **Array.from(arguments)** , 它可以将两类数组对象转换成真正的数组，类数组和可遍历对象（ES6 中的 Set 和Map ）

```javascript
Array.prototype.slice = function(begin, end) {
      end = (typeof end !== 'undefined') ? end : this.length;

      // For array like object we handle it ourselves.
      var i, cloned = [],
        size, len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = (start >= 0) ? start : Math.max(0, len + start);

      // Handle negative value for "end"
      var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
```

### 5 调用父类构造函数实现继承

```javascript
function  SuperType(){
    this.color=["red", "green", "blue"];
}
function  SubType(){
    // 核心代码，继承自SuperType
    SuperType.call(this);
}
```

缺点：

+ 只能继承父类的实例属性额方法，不能继承原型属性和方法
+ 不能复用，每个子类都具有父类的属性和方法，影响性能

