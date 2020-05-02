var sys = require('sys');
var filename = process.ARGV[2];

if (!filename)
  return sys.puts("Usage: node watcher.js filename");

var tail = process.createChildProcess("tail", ["-f", filename]);
sys.puts("start tailing");

tail.addListener("output", function (data) {
  sys.puts(data);
});
var http = require("http");
http.createServer(function(req,res){
  res.sendHeader(200,{"Content-Type": "text/plain"});
  tail.addListener("output", function (data) {
    res.sendBody(data);
  });
}).listen(8000);