//Express as Web Framework.
var express = require('express');
var app = express();

//MongoDB as Non-relational SQL.
var mongoose = require ('mongoose');
var config = require('./config');

var seedController = require('./controllers/seedController');
var apiController = require('./controllers/apiController');

//Static files.
app.use('/assets', express.static(__dirname + '/public'))

//EJS as View Engine.
app.set('view engine', 'ejs')

//Connect the database
mongoose.connect(config);

//Log any accessed url for security reasons
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

//Seed the database: /api/hotels/seed
seedController(app);

//API: /api/hotels/all
apiController(app);

app.listen(3000);