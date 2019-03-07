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

        // db.collection('Todos').findOneAndUpdate({
        //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
        // }, {
        //   $set: {
        //     completed: true
        //   }
        // }, {
        //   returnOriginal: false
        // }).then((result) => {
        //   console.log(result);
        // }, () => {
        //     console.log('Error in updating', err);
        // });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5c801333dd1a0618cce1ab81')
            }, {
                $set: {
                    name: 'Mr. Piyush Kapoor'
                },
                $inc: {
                    age: 1
                }
            }, {
                returnOriginal: false
            }).then((result) => {
                console.log(result);
            }, (err) => {
            console.log('Error in updating', err);
        });

        client.close();
    }
});