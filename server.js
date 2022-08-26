const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (request, response) => {
  console.log('HELLO WORLD TEST FROM CONSOLE!');
});
