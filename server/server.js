const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todomongoose} = require('./models/todo.js');
var {usermongoose} = require('./models/user.js');

var app = express();

const port = process.env.PORT || 3000;

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

app.get('/todos/:todoid', (req, res) => {
    var todoid = req.params.todoid;

    if (!ObjectID.isValid(todoid)) {
        return res.status(404).send();
    }

    Todomongoose.findById(todoid).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
      }).catch((e) => {
        res.status(400).send();
      });    
});

app.delete('/todos/:todoid', (req, res) => {
    var todoid = req.params.todoid;

    if(!ObjectID.isValid(todoid)) {
        return res.status(404).send();
    }

    Todomongoose.findByIdAndRemove(todoid).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:todoid', (req, res) => {
    var todoid = req.params.todoid;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(todoid)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todomongoose.findByIdAndUpdate(todoid, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.post('/users', (req, res) => {
    var newusermongoose = new usermongoose({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age
    });

    newusermongoose.save().then((user) => {
        console.log('successfully saved the user', user);
        res.status(200).send(user);
    }, (err) => {
        console.log('Error in saving user', err);
        res.status(400).send(user);
    });
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

// package.json se hataya
// "scripts": {
//     "start": "node server/server.js",
//     "test": "mocha server/**/*.test.js"
//   },

module.exports = {app};