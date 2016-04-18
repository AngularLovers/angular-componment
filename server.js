var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.end("Hello World\n");
}).listen(8888);
console.log("服务启动完成:8888");
