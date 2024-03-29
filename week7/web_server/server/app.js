var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config/config.json');
var express = require('express');
var path = require('path');
var passport = require('passport');

// var cookieParser = require('cookie-parser');

//routers
var auth = require('./routes/auth');
var index = require('./routes/index');
var news = require('./routes/news');


var app = express();

app.use(bodyParser.json());

require('./models/main.js').connect(config.mongoDbUri);
var authCheckMiddleware = require('./middleware/auth_checker')


app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);



// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.use('/static',
  express.static(path.join(__dirname, '../client/build/static/')));

  // //TODO:remove this after development is done
  // app.all('*', function(req, res, next){
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next();
  // });

//TODO:use for 跨域 remove this after development is done
  app.use(cors());

app.use('/', index);
app.use('/auth', auth);
app.use('/news',authCheckMiddleware);
app.use('/news', news);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});


module.exports = app;
