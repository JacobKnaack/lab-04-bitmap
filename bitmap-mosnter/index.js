'use strict';

const bitmaphandler = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const bittransform = require('./lib/transform');
//const fs = require('fs');

//uses readbitmap to read bitmapfile and return an object
bitmaphandler.bitmapReader('bitmap1.bmp', (err, data) => {
  var newObject = new bitobject.Buffobject(data);
  console.log(newObject);

  //takes new object and transforms the color data
  bittransform.someOtherColor(newObject);
  //newobject.colorpalette.fill(128);

  //creates a new buffer from tranformed object
  var newBuffer = newObject.toBuffer();

  //takes a transfromed data and writes data to a new bitmapfile
  bitmaphandler.newbitmapfile(newBuffer,(err, data) => {
  //would like to add a function to read transformed buffer
    console.log(data);
    //return transformedObject;
  });
 //   fs.writeFile('./lulwat.bmp', data);
});
