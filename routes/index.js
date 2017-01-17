const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req,res,next){
  let name = req.params.name;
  // let tweet = tweetBank.list().forEach(function(tweet){
  //   if(tweet.name === name){
  //     return tweet;
  //   }
  // })
  let tweet = tweetBank.find(name);
  res.send(tweet);
  // res.render('index', {tweet:tweet})
})

router.post('/', function (req, res){

})

// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile('/Users/JustinZhou/Documents/Programming/Fullstack/workshops/twitter-js/public/stylesheets/style.css');
// });

module.exports = router;
