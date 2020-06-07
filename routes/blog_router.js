var express = require('express');
var router = express.Router();
var db = require('../db')
var sql = require('../sql')

router.post('/sendMarkDown', function (req, res, next) {
  const {
    content,
    title,
    describe
  } = req.body
  if (!content || !title) {
    res.send({ code: -1 })
    return
  }
  let nowTime = new Date().valueOf()
  let adData = {
    title,
    create_time: nowTime,
    updata_time: nowTime,
    introduction: describe,
    main_category: '前端',
    sub_category: 'VUE',
    sort: 0,
    top: 0,
    content
  }
  let params = Object.keys(adData).map(key => adData[key])
  db.resultData(sql.insertMarkdownInfo, params).then(result => {
    res.send({
      code: 0,
      id: result.insertId
    })
  }).catch(err => {
    console.log(err)
    res.send({ code: -1 })
  })
});

router.get('/getArticleList', function (req, res, next) {
  const queryData = req.query
  if (!queryData.pageSize || !(queryData.startArticle + 1)) res.send({ code: -1 })
  const startArticle = Number(queryData.startArticle) || 0
  const pageSize = Number(queryData.pageSize) || 10
  db.resultData(sql.selectArticleList, [startArticle, pageSize]).then(result => {
    res.send({ code: 0, result })
  })
});

module.exports = router;