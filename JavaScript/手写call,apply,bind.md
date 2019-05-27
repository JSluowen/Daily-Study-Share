## call

```js
Function.prototype.myCall = function(context){
    if(typeof this !=='function'){
        throw new TypeError('这不是一个函数');
    }
    context = context || window;
    context.fn  = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
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
    context.fn = this;
    let result;
    if(arguments[1]){
            result = context.fn(...arguments[1])
    }else{
            result = context.fn();
    }
    delete context.fn;
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
            return new _this(...args,...arguments)
        }
        return _this.apply(context,args.concat(...arguments));
    }
}
```



