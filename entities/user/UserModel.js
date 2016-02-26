/*
  User Model
*/

var Mongoose = require('mongoose')
  , Schema = require('mongoose').Schema
  //, ObjectId = Schema.ObjectId
;

var userSchema = new Schema({
  googleId: { type: String },
  name: { type: String },
  image_url: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = Mongoose.model('User', userSchema)

