//express_demo.js 文件
var exec = require("child_process").execSync;
var express = require("express"); //引用express
var app = express(); //创建express实例

app.get("/", function (req, res) {
  //当路由url匹配为'/'时，执行function，返回Hello World
  res.send("Hello World22");
});

app.get("/home", function (req, res) {
  //当路由url匹配为'/'时，执行function，返回Hello World

  exec("cd ../ & npm run generate", {  }, function (error) {
    console.log(error);
  });

  res.send("Hello World22" + new Date().getTime());
});
var server = app.listen(8099, function () {
  //应用启动端口为8081

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
