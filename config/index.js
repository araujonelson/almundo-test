var configValues = require('./config');

var getDBConnectionString = 'mongodb://' + configValues.user +':'+ configValues.password + '@ds127429.mlab.com:27429/almundo';

module.exports = getDBConnectionString;