var fs = require("fs");

// 指定的文件不存在的时候不会报错，会自动创建一个该文件
var inputStream = fs.createWriteStream("test.txt");
inputStream.write("xiaomo","utf-8");
inputStream.end();

inputStream.on("finish",function(){
  console.log("写入完成了");
})

inputStream.on("error",function(){
  console.log("写入失败了");
})
console.log("程序执行完毕");
