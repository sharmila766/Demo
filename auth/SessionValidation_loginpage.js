
var express = require('express');

var User   = require('../models/userModel');
var config   = require('../utils/config');

var app = express();

var resetMiddleWare = require('./resetSession');




	
// function requireLogin (req, res, next) {
//   console.log("check verify login2");
//   if (!req.user) {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };


	
function requireLogin (req, res, next) {
  console.log("check verify login1 login page validator ");
  if (req.session && req.session.user) {
    User.findOne({ emailId: req.session.user.emailId }, function(err, user) {
      console.log('session validation login page error '+err)
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;

        if(req.session.user.organizationType==config.shipping){
          res.redirect('/shipping');
        }else if(req.session.user.organizationType==config.bunker){
          res.redirect('/bunker');
        }else if(req.session.user.organizationType==config.lab){
          res.redirect('/lab');
        }else if(req.session.user.organizationType==config.insurance){
          res.redirect('/insurance');
        }

      }else {
        console.log("Session validation user not found");
        res.redirect('/login');
      }
      // finishing processing the middleware and run the route

      
      
      // next();
    });
  } else {
    // next();

    resetMiddleWare(req,next);

    console.log("check verify login1 login page validator load login");
      next();
    // res.redirect('/login');
  }
};



module.exports = requireLogin;