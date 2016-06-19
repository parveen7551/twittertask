var express = require('express');
var router = express.Router();
var passport = require("./../config/passport.js");
var twittImp = require("./twitter.js");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/twitter', passport.authenticate('twitter'));

//handling call back here
router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/' }));

//router.get('/twitts/keyword',twittImp.getTwitts);
router.get('/twitts/keyword', function (req, res, next) {
  var keyword = req.query.keyword;
  twittImp.getTwitts(keyword, function (err, tweets) {
    if(err) {
        res.send(err);
    } else {
       res.send(tweets);
    }

  });
});

module.exports = router;
