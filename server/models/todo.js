var mongoose = require('mongoose');

// using mongodb we can create diff documents having completely diff properties in a same collection
// using mongoose we first create a model define the document properties
var Todomongoose = mongoose.model('Todomongoose', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// // now creating a new instance for a document
// var newTodo = new Todomongoose({
//     text: 'Play badminton'
// });

// // saving the above document to the database
// newTodo.save().then((doc) => {
//     console.log('Successfully saved Todo', doc);
// }, (err) => {
//     console.log('Error occured in saving todo', err);
// });

// //creating next instance and saving
// var otherTodo = new Todomongoose({
//     text: 'Sleep',
//     completed: false,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log('Successfully saved Todo', doc);
// }, (err) => {
//     console.log('Error occured in saving todo', err);
// });

module.exports = {
    Todomongoose
};