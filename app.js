'use stric';
//get env file data
require('dotenv').config();
//get express
const express = require('express');
//get ejs layouts for different layouts on front-end
const expressLayout = require('express-ejs-layouts');

//initialize our app
const app = express();
//initialize our port
const port = 5000 || process.env.port;

//use these middlewares to pass data from forms & pages.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//initialize static folder for static files
app.use(express.static('public'));

//setup templating engines
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//create a basic route to render views/index.ejs
app.get('/', (req, res) => {
  const locals = {
    title: "Notes App",
    description: "Free Note Taking App by Shihab Mahmud",
  };
  res.render('index', locals);
});

//start the server
app.listen(port, () => {
  console.log(`Application listening on ${port}`);
});