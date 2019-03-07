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

        // deleteMany
        // db.collection('Todos').deleteMany({text: 'Play football'}).then((result) => {
        //   console.log(result);
        // });

        // deleteOne
        // db.collection('Todos').deleteOne({completed: false}).then((result) => {
        //   console.log(result);
        // });

        // findOneAndDelete
        db.collection('Todos').findOneAndDelete({name: 'Piyush'}).then((result) => {
          console.log(result);
        }, (err) => {
            console.log('Error in deleting', err);
        });

        // findOneAndDelete
        // db.collection('Users').findOneAndDelete({
        //     _id: new ObjectID("5c800f43d873ab18bd992cba")
        // }).then((results) => {
        //     console.log(results);
        // });

        client.close();
    }
});