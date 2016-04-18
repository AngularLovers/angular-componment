var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("test.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
console.log("文件压缩完成！！");
