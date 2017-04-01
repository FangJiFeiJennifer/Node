/**
 * Created by jiffang on 2017/4/1.
 */
var http = require("http");

http.createServer(function(req,res) {
  res.writeHead(200,{'Content-type':'text/html'});
  res.write('<head><meta chartset="utf-8"><title>First node demo</title></head>');
  res.write('<h2>Header</h2>');
  res.end("Hello World");
}).listen(1337,"localhost");
console.log("Server running at http://localhost:1337");