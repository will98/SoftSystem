/**
 * Module dependencies.
 */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const flash = require('express-flash');
const path = require('path');
const moment = require('moment');
const passport = require('passport');
const hbs = require('express-handlebars');
const MongoStore = require('connect-mongo')(session);
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

moment.locale('es');

/**
 * Controllers (route handlers).
 */
const routes = require('../routes');

const app = express();

app.locals.moment = moment;

/**
 * Handle Error
 */

const {handleError} = require('../middlewares/handleError');

require('../config/passport');

/**
 * Express configuration.
 */
app.set('PORT', process.env.PORT || 8080);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'),'layouts'),
    extname: '.hbs',
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
		url: process.env.MONGO_URI,
		autoReconnect: true
	})
}));
app.use(flash());

app.use(function(req, res, next){
  res.locals.success = req.flash('success');
  res.locals.errors = req.flash('errors');
  next();
});

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));


app.use((req, res, next) => {
  req.dirname = __dirname;
  if(req.session){
    if(req.session.passport && req.session.passport.user) {
      res.locals.user = req.session.passport.user;
      req.user = req.session.passport.user;
    }
  }
  
  return next();
});

/**
 * Routes.
 */

app.use(routes);

app.use(handleError);

module.exports = app;
