var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // importing inbuilt Promise lib from npm
mongoose.connect('mongodb://localhost:27017/TodoApp');

// using mongodb we can create diff documents having completely diff properties in a same collection
// using mongoose we first create a model define the document properties
var Todomongoose = mongoose.model('Todomongoose', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// now creating a new instance for a document
var newTodo = new Todomongoose({
    text: 'Play football'
});

// saving the above document to the database
newTodo.save().then((doc) => {
    console.log('Successfully saved Todo', doc);
}, (err) => {
    console.log('Error occured in saving todo', err);
});

//creating next instance and saving
var otherTodo = new Todomongoose({
    text: 'Play cricket',
    completed: false,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log('Successfully saved Todo', doc);
}, (err) => {
    console.log('Error occured in saving todo', err);
});