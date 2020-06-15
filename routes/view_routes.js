var express = require('express');

var bodyParser = require('body-parser');
var router = express.Router();


var mongoose = require('mongoose');
var app = express();

var requireLoginPageValidation = require('../auth/SessionValidation_loginpage');
// var resetMiddleWare = require('@auth/resetSession2');

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/home', requireLoginPageValidation, function (req, res) {
  res.render('home.hbs');
});

router.get('/signup', requireLoginPageValidation, function (req, res) {
  res.render('signup.hbs');
});
router.get('/login', requireLoginPageValidation, function (req, res) {
  res.render('login.hbs');
});

router.get('/logout', function (req, res) {
  
  req.session.destroy();
  // res.render('login.hbs');
  res.redirect('/login');

});





router.get('/', function (req, res) {
  res.render('home.hbs');
  // res.redirect('/login');

});





module.exports = router;