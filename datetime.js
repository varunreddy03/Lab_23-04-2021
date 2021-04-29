var http=require('http');
var requ=require("./Date_Time");

var obj = requ();
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(`${obj.date} ${obj.time}`);
}).listen(8010);
console.log("server started at 8010")