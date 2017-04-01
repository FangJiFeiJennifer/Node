# console.log()
## 将index.js文件里面的输出内容写到info.log文件（1代表重定向标准输出流）
>node index.js 1>info.log 
## 在console.log中通过参数指定输出字符串的格式
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