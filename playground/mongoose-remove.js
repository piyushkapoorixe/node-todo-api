const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todomongoose} = require('./../server/models/todo');
const {usermongoose} = require('./../server/models/user');

// Todomongoose.remove({}).then((result) => {
//     console.log(result);
// });

// Todomongoose.findOneAndRemove({_id: '5c83ff3411c4a2289210eefd'}).then((todo) => {
//     console.log(todo);
// });

Todomongoose.findByIdAndRemove({_id: '5c83ff3411c4a2289210eefd'}).then((todo) => {
    console.log(todo);
});

