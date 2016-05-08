'use strict';

const readwrite = require('../lib/readbitmap');
const parse = require('../lib/parser');
const transform = require('../lib/transform');
const expect = require('chai').expect;

describe('testing the reading and writing functions', function() {
  describe('testing output of readbitmap.js and newbitmapfile.js', function() {
    it('should return a buffer of hex', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });
  });
});

describe('testing the parser', function() {
  describe('testing whether parser is constructing correct info', function() {
    it('should return BM from file header', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.bheader).to.equal('BM');
        done();
      });
    });

    it ('should return 11078 as the size', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.size).to.equal(11078);
        done();
      });
    });

    it ('should return 256 color', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.colors).to.equal(256);
        done();
      });
    });

    it('should return 256 important colors', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.importantcolors).to.equal(256);
        done();
      });
    });

    it('should return a width of 100', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.width).to.equal(100);
        done();
      });
    });

    it('should return a height of 100',  function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.height).to.equal(100);
        done();
      });
    });

    it('should return a bits per pixel value of 8', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.bitsperpixel).to.equal(8);
        done();
      });
    });
  });
});

describe('testing the transformer', function() {
  describe('testing whether thr transformer is transforming color data', function() {
    it('should change color values in the buffer to 0', function(done) {
      readwrite.bitmapReader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        transform.black(testobject);
        expect(data.toString('hex').slice(64, 65)).to.equal('0');
        done();
      });
    });
  });
});
