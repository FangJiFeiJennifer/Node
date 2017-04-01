## console.log()
#### 将index.js文件里面的输出内容写到info.log文件（1代表重定向标准输出流）
> node index.js 1>info.log 
#### 在console.log中通过参数指定输出字符串的格式
```javascript
//依次输出字符串
console.log("%s","hoge","foo");
//依次输出数字
console.log("%d",10,10.5);
//将字符串转化为数字输出,结果为NaN
console.log("%d","89jajja");
//输出百分号,结果为 % hoge
console.log("%%","hoge");
```
**_console.info()可以完全替代console.log(),并且用法完全一样._**

## console.error()
#### 输出错误内容到指定文件（2代表重定向标准错误输出流）
> node index.js 2>error.log

**_console.warn()可以完全替代console.error(),并且用法完全一样._**

## console.dir()
#### 用于查看一个对象中的内容并且将该对象的信息输出到控制台

## console.time("label") and console.timeEnd("label")
#### 这两个函数联合使用可以统计一段代码的执行时间
> console.time("label") 用于标记时间的开始  
> console.timeEnd("label"") 用于标记时间的结束，并且在控制台输出时间差  
> _这两个方法都使用一个参数，参数值可以是任何字符串，但是两个方法必须使用相同的字符串，才能正确的统计时间。_