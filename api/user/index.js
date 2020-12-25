const Mock = require('mockjs'); //引入mock模块
var express = require('express')
var user = express.Router()
const Random = Mock.Random

user.post('/lanmu1/test123', (req, res) => {
  let articles = []
  for (let i = 0; i < 10; i++) {
    articles.push({
      title: Random.ctitle(5, 7), 
      name: Random.cname(),
    })
  }
  res.json({
    code: 200,
    data: {
      articles
    },
    message: "成功"
  })
})

module.exports = user