const app = require('express')(); //实例化express


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");// 允许任意头部信息
//   res.header("Access-Control-Request-Method", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });
// // 所有因为跨域而发起的 options请求直接响应200
// app.options('*',function (req,res) {
//   console.log('mock options',req.originalUrl)
//   res.send({msg:'mock-server：模拟数据'})
// })
// 代理部分请求
app.get('/proxy/lanmu1/test2', function (req, res) {
  console.log('post /lanmu1/test2')
  res.send({
    code: 200,
    data: 'token string',
    msg: 'mock-server：模拟数据'
  })
});
app.get('/mock/api', function (req, res) {
  // mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
  res.json({"name":'ss999999'});
});


//引入不同模块的api
let user = require('./api/user'); 
let login = require('./api/login');

app.use('/mock',user)
app.use('/mock',login)

// 监听3001端口
app.listen('3001');
