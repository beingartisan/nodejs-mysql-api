// Load environment variables
var dotenv = require('dotenv');
dotenv.load();
// require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');

// Import project files
var projectsFactory = require('./src/services/projectsFactory')();
var projects = require('./src/controller/projects');

// Start app
var app = express();
var port = process.env.port || 8086;

// Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", function (req, res) {
    projectsFactory.getProjects(function(err, data){
        if(err){
            res.json("Unable to retrieve data. " + err);
        }
        res.json(data);
    });    
    
});

app.post("/", function (req, res) {
    res.send('POST Project api');
});

app.put("/", function (req, res) {
    res.send('PUT to my api');
});

app.delete("/", function (req, res) {
    res.send('DELETE to my api');
});

app.listen(port);
console.log('Listening at port ' + port);