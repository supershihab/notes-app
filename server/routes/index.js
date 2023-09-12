'use strict';

//we need bring express since we need to create router  here
const express = require('express');
const router = express.Router();

//bring the controller for business logic
const mainController = require('../controllers/mainController');

/*
* App Routes
*/

//create a basic route to render views/index.ejs
router.get('/', mainController.homepage); //homepage can be named anything
router.get('/about', mainController.about); //homepage can be named anything

//export the router for app.js
module.exports = router;