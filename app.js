"use stric";
//get env file data
require('dotenv').config();
//get express
const express = require('express');
//get ejs layouts for different layouts on front-end
const expressLayout = require('express-ejs-layouts');
//bring in DB connection
const connectDB = require('./server/config/db');

//initialize our app
const app = express();
//initialize our port
const port = 5000 || process.env.port;

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
