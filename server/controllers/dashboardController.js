'use strict';
const Note = require('../models/Notes');
const mongoose = require('mongoose');


/*
* GET DASHBOARD
*/
exports.dashboard = async (req, res) => {

  const locals = {
    title: "Dashboard",
    description: "Free Note Taking App by Shihab Mahmud",
  };

  try {
    const notes = await Note.find({});
    // console.log(notes);
    res.render('dashboard/index', {
      userName: req.user.firstName,
      locals,
      notes,
      layout: '../views/layouts/dashboard',
    });

  } catch (error) {
    console.log(error);
  }

}
