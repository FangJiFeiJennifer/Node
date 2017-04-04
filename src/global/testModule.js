/**
 * Created by jiffang on 2017/4/3.
 */
var testModule = "From testModule.js";
console.log(testModule);
exports.testModule = testModule;

if(module === require.main) {
  console.log("This is the main module in testModule.js");
}