var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('greet.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<center><h2>Reading from html file...</h2></center>")
        res.write(data);
        return res.end();
    });
}).listen(8100);
