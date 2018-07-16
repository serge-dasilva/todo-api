const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', { useNewUrlParser: true },  (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp')
    
    // db.collection('Todos').find({_id: new ObjectID('5b48731aa004661a356cafdd')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(    JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: "Sergio"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    //client.close();
})