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
  bittransform.grey(newObject);
  var newBuffer = bitobject.Buffobject.prototype.toBuffer(newObject);
//   newobject.colorpalette.fill(128);

//takes a transfromed data and writes data to a new bitmapfile
  bitmaphandler.newbitmapfile(newBuffer,(err, data) => {
    var transformedObject = new bitobject.Buffobject(data);
    console.log(transformedObject);
    //return transformedObject;
  });
 //   fs.writeFile('./lulwat.bmp', data);
});
