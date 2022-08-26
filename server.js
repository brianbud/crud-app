const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;

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
