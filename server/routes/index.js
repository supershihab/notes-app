'use strict';

//create a basic route to render views/index.ejs
app.get('/', (req, res) => {
  const locals = {
    title: "Notes App",
    description: "Free Note Taking App by Shihab Mahmud",
  };
  res.render('index', locals);
});