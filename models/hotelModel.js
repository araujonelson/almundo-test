var mongoose = require('mongoose');

//Instance the Schema
var Schema = mongoose.Schema;

//Create the Hotel Schema we are going to use for this app.
var hotelSchema = new Schema({
	name: String,
	stars: String,
	price: String
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;