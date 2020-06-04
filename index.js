const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.port || 8080;

// IMPORT ROUTERS HERE
const usersRouter = require('./routes/users');
const businessesRouter = require('./routes/businesses');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// SERVE APP
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', function (req, res) {
  return res.send('pong');
});

// MOUNT ROUTERS HERE
app.use('/users', usersRouter);
app.use('/businesses', businessesRouter);

// START SERVER
app.listen(process.env.PORT || 8080, ()=> {
  console.log(`Listening on ${port}!`)
});