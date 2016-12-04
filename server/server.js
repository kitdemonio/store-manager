const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./connection');
const Data = require('./data');

const conn = connection.init();

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});

app.get('/test/', function (req, res) {
    Data.get(res);
});