## 静态方法

表示该方法不会被实例继承，而是直接通过类名来调用。

静态方法中的`this` 指的是这个类，而不是类的实例。

静态方法可以和非静态方法重名。

父类的静态方法可以被子类继承调用。

## 静态属性

静态属性指的是类本身的属性，而不是定义在实例上的属性。

## Super关键字

super关键字既可以当做函数使用，也可以当做对象使用。

1. super当做函数使用时，代表父类的构造函数，子类的构造函数必须执行一次父类的构造函数。

   + super虽然代表了父类的构造函数，但是它返回的还是子类的实例。

     ```javascript
     class A {
       constructor() {
         console.log(new.target.name);
       }
     }
     class B extends A {
       constructor() {
         super();
       }
     }
     new A() // A
     new B() // B
     ```

     

   + super作为函数只能在子类的构造函数中使用，其他方法中会报错。

2. super作为对象时，在普通方法中指向父类的原型对象，在静态方法中指向父类。

   + 在子类的普通方法中通过super调用父类的方法时，方法内部的this指向当前子类的实例。

   + 使用super进行属性赋值的时候，super就相当于this，赋值的属性会变成子类的实例属性，而通过super调用这个赋值属性时，相当于调用父类原型对象的属性。

     ```javascript
     class A {
       constructor() {
         this.x = 1;
       }
     }
     class B extends A {
       constructor() {
         super();
         this.x = 2;
         super.x = 3;
         console.log(super.x); // undefined
         console.log(this.x); // 3
       }
     }
     let b = new B();
     ```

   + super作为对象，在静态方法中指向父类，而不是父类的原型对象，同时super的this指向当前子类，而不是子类的实例。

     ```javascript
     class A {
       constructor() {
         this.x = 1;
       }
       static print() {
         console.log(this.x);
       }
     }
     
     class B extends A {
       constructor() {
         super();
         this.x = 2;
       }
       static m() {
         super.print();
       }
     }
     
     B.x = 3;
     B.m() // 3
     ```

     

为什么子类继承父类一定要调用Super?

> 标准规定，子类的实例构建，基于父类的实例，必须调用父类的实例，才能使用this关键字,否则会报错。