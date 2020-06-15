
var express = require('express');

var User = require('../models/userModel');
var app = express();

var resetMiddleWare = require('./resetSession');

var config = require('../utils/config');


// app.use(function(req, res, next) {
//   console.log("check verify login1");
//   if (req.session && req.session.user) {
//     console.log("check verify login1 111");
//     User.findOne({ email: req.session.user.email }, function(err, user) {

//       console.log("check verify login1 222");
//       if (user) {
//         req.user = user;
//         delete req.user.password; // delete the password from the session
//         req.session.user = user;  //refresh the session value
//         res.locals.user = user;
//       }
//       // finishing processing the middleware and run the route
//       res.redirect('/user_list');
//       // next();
//     });
//   } else {
//     console.log("check verify login1 else called");
//     next();
//     // res.redirect('/login');
//   }
// });


// function requireLogin (req, res, next) {
//   console.log("check verify login2");
//   if (!req.user) {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };



function requireLogin(req, res, next) {
  console.log("check verify login1");
  if (req.session && req.session.user) {
    User.findOne({ emailId: req.session.user.emailId }, function (err, user) {
      console.log('session validation error ' + err)
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
        console.log('session validation organizationType ' + req.session.user.organizationType)
        // if (req.session.user.organizationType == config.shipping) {
        //   console.log('req path in session validation ' + req.path)
        //   if (!req.path.indexOf('/shipping')) {
        //     res.redirect('/shipping');
        //   } else {
        //     next();
        //   }

        //   // res.redirect('/shipping');
        // }
        // // else if (req.session.user.organizationType == config.bunker) {
        // //   res.redirect('/bunker');
        // // } else if (req.session.user.organizationType == config.lab) {
        // //   res.redirect('/lab');
        // // } else if (req.session.user.organizationType == config.insurance) {
        // //   res.redirect('/insurance');
        // // }
        next();
      } else {
        console.log("Session validation user not found");
        res.redirect('/login');
      }
      // finishing processing the middleware and run the route
      // res.redirect('/');
      // next();



    });
  } else {
    // next();
    resetMiddleWare(req, next);

    console.log("check verify login1 load login");
    res.redirect('/login');
    // next();
  }
};



module.exports = requireLogin;