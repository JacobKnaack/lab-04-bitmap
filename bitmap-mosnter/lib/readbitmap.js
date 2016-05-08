'use strict';
const fs = require('fs');

exports.bitmapReader = function(image, callback) { //function for reading bitmap data
  fs.readFile(image, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

exports.newbitmapfile = function(buffer, callback) {//Writes data to a new buffer
  fs.writeFile('./lulwat.bmp', buffer, (err) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, './lulwat.bmp');
  });
};
