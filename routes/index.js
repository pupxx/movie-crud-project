var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Wes\'s Movie Extravaganza' })
})

module.exports = router
