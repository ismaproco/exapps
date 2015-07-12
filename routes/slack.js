var express = require('express');
var router = express.Router();

var slack = require('../controllers/slackmn');

/* manage POST request from the slackwebhook  */
router.post('/', function(req, res, next) {
  var message = slack.parseHeader( req );
  slack.saveMessage(message);
  res.send( JSON.stringify( slack.loadMessages() ) );
});

router.get('/', function(req, res, next) {
  res.send( '' );
});


module.exports = router;