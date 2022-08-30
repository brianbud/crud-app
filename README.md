# crud-app

This is my first time learning how to build a CRUD app, and in this readme, I want to document what I've learnt.

## How it's Made:

**Tech Used** JAVASCRIPT, NODE, EXPRESS, MONGODB

### Hoping on the EXPRESS train for the first time

I learnt that installing express is as easy as `npm install express --save`,
I learnt that with npm 5, it's as easy as just `npm install express` or `npm i express`

After creating a server.js file, we could use express in server.js by requiring is

```
const express = require('express');
const app = express();
```

### the R in CRUD is for READ

I learnt that the R in CRUD is for READ operation, and that is when we want to **GET** something.

I learnt how to use the `get` method using

```
app.get('/', (request, response) => {
  res.sendFile(__dirname + '/index.html')
})
```

this is my first time understanding the requested _endpoint_ which is shown as `'/'`
as well as why developers use `__dirname` which is the current directory you are in.
I spent a lot of time trying to debug why things was not working and for future reference, I am writing this as a note to myself to remember to add **Two** underscores in `__dirname`

Until this point, I learnt 1 out of the 4 parts of building a CRUD app. Now I know how Express handles a **GET** Request(**READ** operation).

### Create Post

The C in CRUD is for Create operation and a `<form>` element can be used to send a `POST` request.

In the form element, there is a `method` attribute with the value of `POST` to tell the browser what kind of request to send.

The `action` attribute tells the browser _where_ to send the POST request.

### Express cannot read data

I learnt that Express doesn't handle reading data from the form input and this is where a package like **body-parser** helps.
