## JS的继承

### 原型链继承

原型链继承简单易于实现，缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承

```javascript
function Cat(){ 
}
Cat.prototype = new Animal();
```

### 构造继承

构造继承，可以实现多继承，通过call多个父类对象，缺点只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数复用

```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
```

### 组合继承

组合继承：综合上述两种方式， 借用构造函数实现对父类的实例属性继承，通过原型链实现对父类的原型熟悉和方法继承

缺点：调用了两次父类构造函数，生成了两份实例

```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}4
Cat.prototype = new Animal();
// 组合继承也是需要修复构造函数指向的。
Cat.prototype.constructor = Cat;
```

### 

### 实例继承

实例继承，实例继承的特点是不限制调用方法，缺点是例是父类的实例，不是子类的实例，不支持多继承

```javascript 
function Cat(name){
  var instance = new Animal();
  instance.name = name || 'Tom';
  return instance;
}
```

### 拷贝继承

拷贝继承：特点：支持多继承，缺点：效率较低，内存占用高

```javascript
function Cat(name){
  var animal = new Animal();
  for(var p in animal){
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
}

```

### 寄生组合继承

寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

```javascript
	function Super(name) {
        this.name = name;
        this.colors = ['red', 'blue'];
   }
  Super.prototype.sayName = function () {
    alert(this.name);
  }

  function Sub(name, age) {
    Super.call(this, name);
    this.age = age;
  }
  function inherit(sub, sup) {
        sub.prototype = Object.create(sup.prototype);
        sub.prototype.constructor = sub;
   }
  inherit(Sub, Super);
  Sub.prototype.sayAge = function () {
    alert(this.age);
  }
  var son = new Sub('李四', 29);
  son.sayAge();
```



> 1、原型链继承，将父类的实例作为子类的原型，他的特点是实例是子类的实例也是父类的实例，父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现，缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承，无法向父类构造函数传参。
>
> 2、构造继承，使用父类的构造函数来增强子类实例，即复制父类的实例属性给子类，
>
> 构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。但是构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数服用，每个子类都有父类实例函数的副本，影响性能
>
> 3、实例继承，为父类实例添加新特性，作为子类实例返回，实例继承的特点是不限制调用方法，不管是new 子类（）还是子类（）返回的对象具有相同的效果，缺点是实例是父类的实例，不是子类的实例，不支持多继承
>
> 4、拷贝继承：特点：支持多继承，缺点：效率较低，内存占用高（因为要拷贝父类的属性）无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
>
> 5、组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
>
> 6、寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点