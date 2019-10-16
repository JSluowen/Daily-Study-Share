symbol 是ES6中引入一种基本数据类型，表示独一无二的值。

1. symbol 的值是通过 Symbol 函数生成的，使用 typeof ,结果为 ‘symbol’
2. Symbol 函数的前面不能使用 new 关键字，因为 Symbol 是基本类型的值，而不是一个对象。

3. instanceof 的结果是 false。

4. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要在控制台显示，或者转为字符串 ，容易描述。

5. 如果 Symbol 的参数是一个对象的话，那么这个对象就会去调用他的 toString() , 将其转化为字符串，然后返回，生成一个 symbol 的值。

   ```javascript
   const obj = {
     toString() {
       return 'abc';
     }
   };
   const sym = Symbol(obj);
   console.log(sym); // Symbol(abc)
   ```

6. Symbol 函数的参数只是对于 symbol 值的一个描述，相同 Symbol 函数返回的值是不相等的。

7. Symbol 的值不能与其他类型的值进行运算，否则会报错。

8. Symbol 值可以显示的转换为字符串。

   ```javascript
   var sym = Symbol('My symbol');
   
   console.log(String(sym)); // 'Symbol(My symbol)'
   console.log(sym.toString()); // 'Symbol(My symbol)'
   ```

9. Symbol 值可以作为对象的属性名，可以保证对象不会出现同名的属性名。

10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。

    ```javascript
    var obj = {};
    var a = Symbol('a');
    var b = Symbol('b');
    
    obj[a] = 'Hello';
    obj[b] = 'World';
    
    var objectSymbols = Object.getOwnPropertySymbols(obj);
    
    console.log(objectSymbols);
    // [Symbol(a), Symbol(b)]
    ```

11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。

    ```javascript
    var s1 = Symbol.for('foo');
    var s2 = Symbol.for('foo');
    
    console.log(s1 === s2); // true
    ```

12. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。

    ```javascript
    var s1 = Symbol.for("foo");
    console.log(Symbol.keyFor(s1)); // "foo"
    
    var s2 = Symbol("foo");
    console.log(Symbol.keyFor(s2) ); // undefined
    ```

    

