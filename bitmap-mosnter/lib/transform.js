//takes js object & manipulates data

exports.grey = function(object) {
  object.colorpalette.fill(128);
};

exports.black = function(object) {
  object.colorpalette.fill(0);
};
