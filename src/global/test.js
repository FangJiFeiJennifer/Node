/**
 * Created by jiffang on 2017/4/3.
 */
var testModule = require('./testModule');

if(module === require.main) {
  console.log("This is the main module in test.js");
}

require.resolve('./testModule');

console.log(require.cache);

console.log(__dirname);

console.log(__filename);