const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
const MongoClient = require('mongodb').MongoClient;
const connectionString =
  'mongodb+srv://brian:<password>@cluster0.uhkkjle.mongodb.net/?retryWrites=true&w=majority'; //remember to add this in .env and gitignore

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
  console.log(request.body);
});

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to Database');
  })
  .catch((error) => console.error(error));
