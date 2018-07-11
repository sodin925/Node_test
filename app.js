var mime = require("mime");
var url = require("url");
var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    fs.stat("." + pathname, function (err, stats) {
        if (!err && stats.isFile()) {
            fs.readFile("./1.html", function (err, html) {
                if (!err) {
                    res.writeHead(200, {
                        "content-type": mime.getType(pathname)
                    });
                    res.write(html);
                    res.end();
                }
            });
        }
    });

}).listen(3000);