'use strict';

/*
* GET HOMEPAGE
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "Notes App",
    description: "Free Note Taking App by Shihab Mahmud",
  };
  res.render('index', locals);

}

