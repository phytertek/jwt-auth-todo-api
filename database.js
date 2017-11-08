const mongoose = require('mongoose');

const { MONGODB_URI } = require('./config');

mongoose.Promise = global.Promise;

const options = {
  useMongoClient: true,
  promiseLibrary: global.Promise
};

mongoose.connect(MONGODB_URI, options, error => {
  if (error) return console.error(error);
  console.log('Database connected');
});
