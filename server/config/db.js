'use strict';

const mongoose = require('mongoose');
//remove extra things for DB in terminal
mongoose.set('strictQuery', false);

//connect to db
const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}


module.exports = connetDB; //for app.js