var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var notes = require('./routes/note');


var app = express();

//view Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);