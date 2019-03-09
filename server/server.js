var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todomongoose} = require('./models/todo.js');
var {usermongoose} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);

    // now creating a new instance for a document
    var newTodo = new Todomongoose({
        text: req.body.text
    });

    // saving the above document to the database
    newTodo.save().then((doc) => {
        console.log('Successfully saved Todo', doc);
        res.send(doc);
    }, (err) => {
        console.log('Error occured in saving todo', err);
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todomongoose.find().then((todos) => {
        res.send({todos}); // instead of sending array of todos we send in object form
    }, (err) => {
        console.log('Error occured in finding todos', err);
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});

module.exports = {app};