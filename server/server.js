var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // importing inbuilt Promise lib from npm
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// now creating a new instance for a document
var newTodo = new Todomongoose({
    text: 'Play badminton'
});

// saving the above document to the database
newTodo.save().then((doc) => {
    console.log('Successfully saved Todo', doc);
}, (err) => {
    console.log('Error occured in saving todo', err);
});

//creating next instance and saving
var otherTodo = new Todomongoose({
    text: 'Sleep',
    completed: false,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log('Successfully saved Todo', doc);
}, (err) => {
    console.log('Error occured in saving todo', err);
});

// new model starts

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

var newusermongoose = new usermongoose({
    username: 'piyushkapoorixe',
    email: 'hello@gmail.com',
    age: 20
});

newusermongoose.save().then((doc) => {
    console.log('successfully saved the user', doc);
}, (err) => {
    console.log('Error in saving user', err);
});