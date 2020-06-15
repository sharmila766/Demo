var express = require('express');

// var User   = require('../models/user');
var app = express();



function resetSession (req, next) {
    console.log("Middleware Reset session called ");
    req.session.destroy(function(err) {
        // cannot access session here
        console.log("session destroyed");
     });
    
    //   next();
  };

module.exports = resetSession;


