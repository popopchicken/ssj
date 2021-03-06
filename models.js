var Mongoose = require('mongoose');

var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "summary": String,
  "image": String   // So no url problem
});

var MessageSchema = new Mongoose.Schema({
  "name": String,
  "message": String,
  "image": String
});
var LocationSchema = new Mongoose.Schema({
  "latlng": [Number, Number],
  "name": String,
  "tag": String
});

exports.Message = Mongoose.model('Message', MessageSchema);
//exports.Message = Mongoose.model('Location', LocationSchema);
