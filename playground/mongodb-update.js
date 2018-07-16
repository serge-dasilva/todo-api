const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', { useNewUrlParser: true },  (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp')
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b4c98fe36d0950c54898db8")
    }, {
        $set: {
            text: "Blanchir les dents de Didier",
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
})