const mongoose = require('mongoose');
const validator = require('validator'); // check https://www.npmjs.com/package/validator  & custom validations in  https://mongoosejs.com/docs/validation.html

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
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email.'
        }
    }, age: {
        type: Number,
        trim: true,
        minlength: 1,
        default: null
    }, password: {
        type: String,
        required: true,
        minlength: 6
    }, tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
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