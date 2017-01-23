var Hotel = require('../models/hotelModel.js');

module.exports = function(app) {

    app.get('/api/hotels/seed', function (req, res){
        
        //Seed the database

        var allHotels = [
            {name: "Hotel Emperador", stars:"3", price: "1596"},
            {name: "Petit Palace San Bernardo", stars:"4", price: "2145"},
            {name: "Hotel Nuevo Boston", stars:"2", price: "861"}];

        Hotel.collection.insert(allHotels, onAllHotelsInserted);

        function onAllHotelsInserted(err, msg){
            if(err){
                var message = 'An error has occured';

                console.log(message);
                res.send(message);
            } else {
                var message = 'Seed sucessful. All hotels were inserted.';
                
                console.log(message);
                res.render('index', {msg: message})
                //res.send(message);
            }
        }
    });
}