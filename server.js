const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});

app.get('/', (request, response) => {
  response.send('Hello World');
});
