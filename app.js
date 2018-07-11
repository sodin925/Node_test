var fs = require("fs");
var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {
        "content-type": "text/html"
    });
    var html = fs.readFileSync("./1.html");
    res.write(html);
    res.end();
}).listen(3000);