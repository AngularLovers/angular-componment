var fs = require("fs");
// 阻塞：文件读取完后才执行完程序
var data = fs.readFileSync("package.json");
console.log(data.toString());
console.log("==================================================================");

// 非阻塞：不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能
var newDate = fs.readFile("package.json",function(err,data){
    if(err){
      console.log(err);
    }
    console.log(data.toString());

})

// 阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内
