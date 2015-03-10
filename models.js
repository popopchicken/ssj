var Mongoose = require('mongoose');

/*
var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "summary": String,
  "image": String   // So no url problem
});
*/

var MessageSchema = new Mongoose.Schema({
  "name": String,
  "message": String,
  "image": String
});

exports.Message = Mongoose.model('Message', MessageSchema);
