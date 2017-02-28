var express = require('express')
var router = express.Router()
var twitters = require('../controllers/twitters')

/* GET users listing. */
router.get('/:query', twitters.searchTweets)

module.exports = router
