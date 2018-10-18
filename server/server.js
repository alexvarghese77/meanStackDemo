var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors')

var index = require('./routes/index');
var posts = require('./routes/posts');

var port = 3000;

var app = express();


//allow cross orgine

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

//view Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static path
app.use(express.static(path.join(__dirname, 'client')))

//Body parser 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', index);
app.use('/api', posts);

app.listen(port, () => {
    console.log("server started on port 3000");
})

