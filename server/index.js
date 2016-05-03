"use strict";
var path = require('path');
var globSync = require('glob').sync;
const bodyParser = require('body-parser');
var express = require('express');
var app = express();

var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);

const PATH_STYLES = path.resolve(__dirname, '../app/styles');
const PATH_DIST = path.resolve(__dirname, '../dist');

app.use(bodyParser.urlencoded({ extended: false } ));

app.use('/styles', express.static(PATH_STYLES));
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/index.html'));
});

// Run server to listen on port 3000.
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: false } ));
app.use(express.static('static'));

// Set socket.io listeners.
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

var nedb = require('nedb');

//app.itemsDB = new nedb({filename: 'items', autoload: true});
//app.eventsDB = new nedb({filename: 'events', autoload: true});

mocks.forEach(function (route) {
  route(app);
});

let sid = 1000;
app.get('/donate', (req, res) => {
  let date = "05/03/16";
  let amount = "500";
  let status = "pending";
  let id = ""+sid;
  sid++;

  io.emit('donation event', { id, date, amount, status });

  res.send('Donation Emitted');
});
