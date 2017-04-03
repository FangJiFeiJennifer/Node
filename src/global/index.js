/**
 * Created by jiffang on 2017/4/1.
 */

function testFunction(str) {
  console.log(str);
  console.timeEnd("test");
}

var timer1 = setTimeout(testFunction,5000,"Just test setTimeout function.");
console.time("test");
setTimeout(testFunction,10000.89989,"Just test setTimeout function.");

clearTimeout(timer1);

var interval = setInterval(testFunction,50,"Just test setInterval function.");
clearInterval(interval);

var test = setTimeout(testFunction,50,"Just test setInterval function.");
test.unref();
test.ref();