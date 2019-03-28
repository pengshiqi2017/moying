var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article=require('../models/article');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/news', function (req, res, next) {
    article.findAll(function (err, getArticles) {
        res.json({status: 0, message: "获取主页", data: getArticles})
    })
});
module.exports = router;
