var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT | 9000;

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

require('./app/routing/api_routes.js')(app); 
require('./app/routing/html_routes.js')(app);

//uncompleted. 