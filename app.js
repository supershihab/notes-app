"use stric";
//get env file data
require('dotenv').config();
//get express
const express = require('express');
//get ejs layouts for different layouts on front-end
const expressLayout = require('express-ejs-layouts');
//bring in DB connection
const connectDB = require('./server/config/db');
//bring in authentication: session, passport, connect-mongo
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');


//initialize our app
const app = express();
//initialize our port
const port = 5000 || process.env.port;

//use session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
  }),
}));

//use passport
app.use(passport.initialize());
app.use(passport.session());
//use these middlewares to pass data from forms & pages.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to DB
connectDB();

//initialize static folder for static files
app.use(express.static('public'));

//setup templating engines
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

//Handle 404 - make sure it's the last routes
app.use('*', (req, res) => {
  res.status(404).render('404')
});

//start the server
app.listen(port, () => {
  console.log(`Application listening on ${port}`);
});
