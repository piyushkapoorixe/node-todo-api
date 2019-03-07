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

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {    // saw depreciation warning in termonal hence added
    if (err) {
        console.log('Unable to connect to MongoDB server.');
    } else {
        console.log('Successfully connected to MongoDb server.');
        const db = client.db('TodoApp')

        // db.collection('Todos').insertOne({
        //     text: 'Piyush',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         console.log('Unable to create todo', err);
        //     } else {
        //         console.log(result.ops);
        //     }
        // });

        // db.collection('Users').insertOne({
        //     name: 'Piyush Kapoor',
        //     age: 22,
        //     location: 'Delhi'
        // }, (err, result) => {
        //     if (err) {
        //         console.log('Error occured while connecting to Mongodb Server.', err);
        //     } else {
        //         console.log(result.ops);
                
        //         // To print timestamp use following
        //         // console.log(result.ops[0]._id.getTimestamp());
        //     }
        // });

        client.close();
    }
});