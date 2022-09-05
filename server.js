const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const connectionString = process.env.MONGODB_URI;

app.set('view engine', 'ejs');

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');
    app.listen(PORT, () => {
      console.log(`The server is now running on port ${PORT}`);
    });
    // be sure to place body-parser BEFORE your CRUD handlers
    app.use(bodyParser.urlencoded({ extended: true }));

    //All handlers here
    app.get('/', (request, response) => {
      db.collection('quotes')
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((error) => console.error(error));
      response.sendFile(__dirname + '/index.html');
    });

    app.post('/quotes', (request, response) => {
      quotesCollection
        .insertOne(request.body)
        .then((result) => {
          response.redirect('/');
          console.log(result);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));
