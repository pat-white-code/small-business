const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.port || 8080;

// IMPORT ROUTERS HERE
const usersRouter = require('./routes/users');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// SERVE APP
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', function (req, res) {
  return res.send('pong');
});

// MOUNT ROUTERS HERE
app.use('/users', usersRouter);

// START SERVER
app.listen(process.env.PORT || 8080, ()=> {
  console.log(`Listening on ${port}!`)
});