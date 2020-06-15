
var express = require('Express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
const hbs = require('hbs');
const moduleAlias = require('module-alias');
const npm_package = require('./package.json')
var log4js = require('log4js');
var logger = log4js.getLogger('SampleWebApp');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var util = require('util');
var session = require('client-sessions');
require('module-alias/register')

var viewRoutes = require('./routes/view_routes');

var user = require('@routes/user_routes');

//var config =require('./utils/config');
var apiError = require('./utils/apiErrorMessages');

var config = require('./utils/config');
var crud=require('./routes/crud_api')


var mongodb = require('mongodb');


// set secret variable
app.set('secret', config.secret);



//db connection 

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
// mongoutil.connectToServer(function (err) {
//     console.log('mongo connection error ' + err);
// });



app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// duration: 24 * 60 * 60 * 1000,



// app.use(session({
//    cookieName: 'session',
//    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
//    duration: 10 * 60 * 1000,
//    activeDuration: 3 * 60 * 1000

//    // ,
//    // httpOnly: true,
//    // secure: true,
//    // ephemeral: true
// }));



// app.use(expressJWT({
// 	secret: config.secret
// }).unless({
// 	path: excepPaths
// }));


// app.use(bearerToken());

app.use('/', viewRoutes);

app.use('/api', crud, user, config,apiError);

var port = process.env.PORT || 3000;

app.listen(port, function () {
   console.log('Server started on port ' + port);
});


