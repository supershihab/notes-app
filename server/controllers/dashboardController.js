'use strict';

/*
* GET DASHBOARD
*/
exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "Free Note Taking App by Shihab Mahmud",
  };
  res.render('dashboard/index', {
    locals,
    layout: '../views/layouts/dashboard',
  });
}