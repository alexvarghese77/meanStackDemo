var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var posts = require('./routes/posts');

var port = 3000;

var app = express();

//view Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static path
app.use(express.static(path.join(__dirname, 'client')))

//Body parser 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', posts);

app.listen(port, () => {
    console.log("server started on port 3000");

})

