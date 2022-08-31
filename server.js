const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const connectionString = process.env.MONGODB_URI;

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});
// be sure to place body-parser BEFORE your CRUD handlers
app.use(bodyParser.urlencoded({ extended: true }));

//All handlers here
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (request, response) => {
  quotesCollection
    .insertOne(request.body)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error(error));
});

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
  })
  .catch((error) => console.error(error));
