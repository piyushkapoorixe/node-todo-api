var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // importing inbuilt Promise lib from npm
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); // get it by using heroku config command

//const uri = "mongodb+srv://piyushkapoor:<password>@cluster0-xlkbt.mongodb.net/test?retryWrites=true";
const uri = "mongodb+srv://piyushkapoor:piyushkapoor@cluster0-xlkbt.mongodb.net/test?retryWrites=true";

// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(uri);

module.exports = {
    mongoose // using es6 and it is made from mongoose: mongoose;
};