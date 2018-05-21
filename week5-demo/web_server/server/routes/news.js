var express = require('express');
var router = express.Router();

/* GET news list */
router.get('/', function(req, res, next) {
  news=[
    {
      "source":"First",
      "title":"Hi",
      "description":"hello",
      "url":"https://www.google.com",
      "urlToImage":"https://si/wsi/net/public/resources/images",
      "publishedAt":"2018-02-24T18:42:002",
      "digest":"3dhakjshakhskj==\n",
      "reason":"Recommend"
    },
    {
      "source":"Second",
      "title":"Hii",
      "description":"helloo",
      "url":"https://www.baidu.com",
      "urlToImage":"https://si/wsi/net/public/resources/images",
      "publishedAt":"2018-02-24T18:42:005",
      "digest":"3dhakjshakhskj==\n",
      "reason":"unRecommend"

    }
  ]
  res.json(news);
});


module.exports = router;
