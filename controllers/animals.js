var express = require('express')
var router = express.Router()
var User = require('../models/User')

// Domestic animals page
router.get('/domestic', function(req, res) {
  res.json({
    animals: "cows"
  })
})

// Wild animals page
router.get('/wild', function(req, res) {
  res.send('Wolf, Fox, Eagle')
})

module.exports = router