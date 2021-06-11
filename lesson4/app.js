const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');



















app.listen(5000, () => {
    console.log('App listen 5000')
})

function _connectDB() {
    mongoose.connect('mongodb://localhost/my_database');
    const connection = mongoose.connection;
  connection.on('error', (error) => {
      console.log(error)
  })
}


