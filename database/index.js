const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');
mongoose.connect('mongodb://localhost/legacy');
// mongoose.connect('mongodb://infamousfrogs:Hackreactor21@ds143191.mlab.com:43191/viator-legacy');
mongoose.Promise = require('bluebird');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});


const userSchema = mongoose.Schema({

    user: String,
    month: String,
    day: String,
    year: String,
    Airline: String,
    flight: String,
    destination: String,
    returnFlight: String,
    returnMonth: String,
    returnDay: String,
    returnMonth: String

  });

userSchema.plugin(findOrCreate);


const historyStorage = mongoose.model('historyStorage', userSchema);


module.exports = historyStorage;
