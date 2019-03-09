var mongoose = require('mongoose');

var usermongoose = mongoose.model('usermongoose', {
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }, email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }, age: {
        type: Number,
        trim: true,
        minlength: 1,
        default: null
    }
});

// var newusermongoose = new usermongoose({
//     username: 'piyushkapoorixe',
//     email: 'hello@gmail.com',
//     age: 20
// });

// newusermongoose.save().then((doc) => {
//     console.log('successfully saved the user', doc);
// }, (err) => {
//     console.log('Error in saving user', err);
// });

module.exports = {
    usermongoose
};