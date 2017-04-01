/**
 * Created by jiffang on 2017/4/1.
 */
console.time("label");



console.time("log");

//依次输出字符串
console.log("%s","hoge","foo");
//依次输出数字
console.log("%d",10,10.5);
//将字符串转化为数字输出,结果为NaN
console.log("%d","89jajja");
//输出百分号,结果为 % hoge
console.log("%%","hoge");

console.timeEnd("log");



var user = new Object();
user.name = "Jennifer";
user.getName = function() {
  return this.name;
};
user.setName = function(name) {
  this.name = name;
};
console.dir(user);
console.log(user);

console.timeEnd("label");