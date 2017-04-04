## 在node.js中，在一个模块定义的变量、函数只在该模块中有用，除非通过exports对象将其传递到模块外面；node.js的全局对象是global,以下是常用的全局方法和全局类。
#### setTimeout(callback,time,[arg],[...])
> 1. 使用两个以上的参数，前两个为必须的参数，第一个是回调函数。
> 2. 第二个是延迟的时间，为一个整数，该值必须是1~2147483647之间，如果值过大会被自动修改为1.从广义上说，该值不能超过24.8天。
> 3. 从第三个参数开始为传入回调函数的参数。
#### clearTimeout()取消回调函数的调用
```javascript
function testFunction(str) {
  console.log(str);
}

var timer1 = setTimeout(testFunction,5000,"Just test setTimeout function.");
setTimeout(testFunction,10000,"Just test setTimeout function.");

clearTimeout(timer1);
```

#### setInterval(callback,time,[arg],[...])每隔多长时间执行回调函数
> 1. 参数同setTimeout(callback,time,[arg],[...])
#### clearInterval()取消setTimeout()

#### unref()取消回调函数的调用 & ref()恢复回调函数的调用
```javascript
function testFunction(str) {
  console.log(str);
  console.timeEnd("test");
}

var test = setTimeout(testFunction,50,"Just test setInterval function.");
test.unref();
test.ref();
```
*****
### node.js中所有的文件都是一个模块，require.main可以检测一个模块是否为主模块（在命令窗口中通过node XXX.js直接运行的文件。）
```javascript
if(module === require.main) {
  console.log("This is the main module in testModule.js");
}
```
>node.js模块在加载的时候会运行里面的每一行代码，在首次加载后将会缓存在缓冲区，这就意味着对模块的多次引用得到的都是同一个模块。
这也意味着多次引用，不会引起模块内的代码多次执行。