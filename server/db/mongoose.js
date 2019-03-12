var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // importing inbuilt Promise lib from npm
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); // get it by using heroku config command

//const uri = "mongodb+srv://piyushkapoor:<password>@cluster0-xlkbt.mongodb.net/test?retryWrites=true";
// const uri = "mongodb+srv://piyushkapoor:piyushkapoor@cluster0-xlkbt.mongodb.net/test?retryWrites=true";

// uncomment the following 2 lines of code for heroku database usage by mlab
const uri = "mongodb://piyush:kap00r@ds121495.mlab.com:21495/piyush";
mongoose.connect(uri);

//uncomment the following line of code for localhost usage
 //mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
    mongoose // using es6 and it is made from mongoose: mongoose;
};