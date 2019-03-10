const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todomongoose} = require('./../server/models/todo');
const {usermongoose} = require('./../server/models/user');

 var todoid = '5c83ff3411c4a2289210eefd';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

Todomongoose.find({
  _id: todoid
}).then((todos) => {
  console.log('Todos', todos);
});

Todomongoose.findOne({
  _id: todoid
}).then((todo) => {
  console.log('Todo', todo);
});

Todomongoose.findById(todoid).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

var userid = '5c822ccf9e1080203cc56e6d';

usermongoose.findById(userid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User by Id',user);
}, (e) => {
  console.log(e);
});
