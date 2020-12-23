const Mock = require('mockjs'); //引入mock模块
const Random = Mock.Random
const express = require('express')
const login = express.Router()

//获取login
login.get('/login/loginCode', (req, res) => {
  res.json({
    code: 200,
    data: {
      userList: {
        token: 'admin',
        name: '管理员',
        float: Random.float(0, 100, 1, 3)
      }
    }
  })
})
login.get('/login/loginCode2', (req, res) => {
  res.json({
    code: 200,
    data: {
      userList: {
        token: 'admin28888888888',
        name: '管理员2',
        float: Random.float(0, 100, 1, 3)
      }
    }
  })
})

module.exports = login