// creating new objectid ourself starts

    // const MongoClient = require('mongodb').MongoClient;
    //using object destructuring
    //const {MongoClient} = require('mongodb'); // identical as above statement of MongoClient require mongodb
    const {MongoClient, ObjectID} = require('mongodb');

    // var obj = new ObjectID();   // creating new instance of objectid
    // console.log(obj);

// creating new objectid ourself ends

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => { // saw depreciation warning in termonal hence added
    if (err) {
        console.log('Unable to connect to MongoDB server.');
    } else {
        console.log('Successfully connected to MongoDb server.');
        const db = client.db('TodoApp')

        // db.collection('Todos').find({
        //   _id: new ObjectID('5c800f43d873ab18bd992cba')
        // }).toArray().then((docs) => {
        //   console.log('Todos');
        //   console.log(docs);
        // }, (err) => {
        //   console.log('Unable to fetch todos', err);
        // });

        // db.collection('Todos').find().count().then((count) => {
        //   console.log(`Todos count: ${count}`);
        // }, (err) => {
        //   console.log('Unable to fetch todos', err);
        // });

        db.collection('Users').find({name: 'Piyush Kapoor'}).toArray().then((docs) => {
            console.log(docs);
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

        client.close();
    }
});