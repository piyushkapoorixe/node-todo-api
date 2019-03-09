var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // importing inbuilt Promise lib from npm
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose // using es6 and it is made from mongoose: mongoose;
};