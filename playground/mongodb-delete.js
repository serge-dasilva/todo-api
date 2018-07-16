const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', { useNewUrlParser: true },  (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp')
    
    //deleteMany

    db.collection('Todos').deleteMany({text: "Something to do"}).then((result) => {
        console.log(result);
    });

    //deleteOne

    db.collection('Todos').deleteOne({completed: true}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })

    //client.close();
})