var Hotel = require('../models/hotelModel.js');

module.exports = function(app) {

    app.get('/api/hotels/all', function(req, res){

        Hotel.find({}, function(err, hotels) {
            if(err) throw err;

            res.send(hotels)

        });
    });

    app.get('/api/hotels/:id', function(req, res){

        Hotel.findById({ _id: req.params.id }, function(err, hotels) {
            if(err) throw err;

            res.send(hotels)

        });
    });

    app.get('/api/hotels/stars/:stars', function(req, res){

        Hotel.find({ stars: req.params.stars }, function(err, hotels) {
            if(err) throw err;

            res.send(hotels)

        });
    });
}