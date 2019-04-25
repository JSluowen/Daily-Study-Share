##  函数的this永远指向最后调用该函数的那个对象(记住这句话，this了解一半)

## 默认绑定

默认绑定旨在，函数独立调用时默认绑定this。浏览器环境下为window（注意非严格模式），严格模式下为undefined。优先级是最低的一种绑定方式。

```js
var name = "windowsName";
function a() {
    var name = "Cherry";
    console.log(this.name);          // windowsName
    console.log("inner:" + this);    // inner: Window
}
a();
console.log("outer:" + this)         // outer: Window
```

注意：这里我们没有使用严格模式，如果使用严格模式的话，全局对象就是 `undefined`

## 隐式绑定

* 规则：调用位置是否有上下文对象，（函数调用时被某些对象拥有）

```js
var name = "windowsName";
var a = {
    name: "Cherry",
    fn : function () {
        console.log(this.name);  // Cherry
    }
}
a.fn();
```

比较坑的列子

隐式丢失：当一个对象上的函数被一个无任何修饰的变量保存引用后，隐式绑定规则失效（进而只能使用默认的绑定规则）

```js
var name = "windowsName";
var a = {
    name : null,
    fn : function () {
        console.log(this.name);
    }
}
a.fn() //null
var f = a.fn;
f(); // windowsName
```

``` js
var name = "windowsName";
function fn() {
    var name = 'Cherry';
    innerFunction();
    function innerFunction() {
    	console.log(this.name);      // windowsName
    }
}
fn()
```

**总结：this 的指向不是在创建的时候就可以确定的，永远是指向最后调用的那个对象**



## 改变this的指向（了解this的另一半）

## 显示绑定（call apply bind）

1. apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或**类似数组的对象**）提供的参数

   `fun.apply(thisArg, [argsArray])`

   * `thisArg`：在 fun 函数运行时指定的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象）
   * `argsArray` : 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数

2. apply 和 call 的区别

   `fun.call(thisArg,a,b,c...)`

    **apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组**

   ```js
   var Person = function (name, age) {
     this.name = name;
     this.age = age;
   };
   var Girl = function (name) {
     Person.call(this, name);
   };
   var Boy = function (name, age) {
     Person.apply(this, arguments);
   }
   var g1 = new Girl ('qing');
   var b1 = new Boy('qianlong', 100);
   ```

   

3. bind的使用

   定义：bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列

   语法：`function.bind(thisArg[, arg1[, arg2[, ...]]])`

   ```js
   window.color = 'red';
   var o = {color: 'blue'};
   
   function sayColor(){
     alert(this.color);
   }
   var func = sayColor.bind(o);
   // 输出 "blue", 因为传的是对象 o，this 始终指向 o
   func();
   
   var func2 = sayColor.bind(this);
   // 输出 "red", 因为传的是this，在全局作用域中this代表 window。等于传的是 window。
   func2();
   ```

   注意：bind只生效一次

   ```js
   function f(){
     return this.a;
   }
   
   //this被固定到了传入的对象上
   var g = f.bind({a:"azerty"});
   console.log(g()); // azerty
   
   var h = g.bind({a:'yoo'}); //bind只生效一次！
   console.log(h()); // azerty
   ```

   

4. **硬绑定**

   借助显示绑定的原理，包装一层函数来实现

   ```js
   function foo() {
       console.log( this.a );
   }
   
   var obj = {
       a: 2
   };
   
   var bar = function() {
       foo.call( obj );
   };
   bar(); // 2
   
   setTimeout( bar, 100 ); // 2
   
   // 硬绑定后bar无论怎么调用，都不会影响foo函数的this绑定
   bar.call( window ); // 2
   ```

   

## new （绑定）

1. 任何函数都可能被用作构造函数，当函数被new操作符“构造调用”时，会执行下面操作：
   * 创建一个新对象（若该函数不是JS内置的，则创建一个新的Object对象）
   *  将this绑定到这个对象
   * 执行构造函数中的代码
   *  若函数没有返回其他对象，则自动返回这个新对象；若函数有return返回的是非对象，则还是自动返回这个新对象，即覆盖那个非对象。

```js
function Foo(a){
	this.a =a;	
}
let obj = new Foo(22);
console.log(obj.a)// 22
```

2. new 内部实现的过程

``` js
var a = new myFunction("Li","Cherry");

new myFunction{
    var obj = {};
    obj.__proto__ = myFunction.prototype;
    var result = myFunction.call(obj,"Li","Cherry");
    return typeof result === 'Object'? result : obj;
}

```

1. 创建一个空对象 obj;
2. 将新创建的空对象的隐式原型指向其构造函数的显示原型。
3. 使用 call 改变 this 的指向
4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。

## 绑定规则总结 

​	**优先级：new > 显示绑定 > 隐式绑定 > 默认绑定**

1. 毫无疑问， 默认绑定的优先级是四条规则中最低的，来看看隐式绑定和显示绑定

   ```js
   function foo() {
       console.log(this.a);
   }
   var obj1 = {
       a: 2,
       foo: foo
   };
   var obj2 = {
       a: 3,
       foo: foo
   };
   obj1.foo(); // 2
   obj2.foo(); // 3
   obj1.foo.call(obj2); // 3
   obj2.foo.call(obj1); // 2
   ```

   

2. 隐式绑定与 new 的比较

   ```js
   function foo(a){
       this.a = a;
   }
   var obj={
       foo:foo 
   }
   
   obj.foo(2);
   console.log(obj.a);//2
   
   var obj2 = new obj.foo(3);
   console.log(obj2.a);//3
   ```

   

3. 显示绑定与 new 的比较

   因为call /apply 不能同 new 同时使用，因此我们借用硬绑定（显示绑定的一种）简单直接使用bind函数来实现

   ```js
   function foo(a){
       this.a = a; 
   }
   var obj = {};
   var bar = foo.bind(obj);
   bar(1);
   console.log(obj.a);//1
   
   var obj2 = new bar(2);
   console.log(obj2.a);//2
   ```

   

## 补充知识说明

1. _this = this

```js
var name = "windowsName";
var a = {
    name : "Cherry",
    func1: function () {
        var name = 'zhangsan';    
        var _this = this; 
        foo();
        function foo(){
        	console.log(_this.name)
        } 
    }
};
a.func1() //Cherry
```



2.箭头函数

```js
var name = "windowsName";
var a = {
    name : "Cherry",
    
    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
       //第一种写法
       // setTimeout(function(){
       //     this.func1() 
       // },100);
        
       //第二种写法
       // setTimeout(()=>{
       //     this.func1() 
       // },100);
    }

};
//第一种
a.func2() //func1() is not function
//第二种
a.func2()//Cherry
```

原因：

1. 箭头函数的 this 始终指向函数定义时的 this，而非执行时,箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”

2. 由于`this`在箭头函数中已经按照词法作用域绑定了，所以，用`call()`或者`apply()`调用箭头函数时，无法对`this`进行绑定

   ```js
   var obj = {
       birth: 1990,
       getAge: function (year) {
           var b = this.birth; // 1990
           var fn = (y) => y - this.birth; // this.birth仍是1990
           return fn.call({birth:2000}, year);
       }
   };
   obj.getAge(2015); // 25
   ```
