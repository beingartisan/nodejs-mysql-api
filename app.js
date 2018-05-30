var express = require('express');
var bodyParser = require('body-parser');
var projects = require('./src/projects');

// Start app
var app = express();
var port = process.env.port || 8086;

// Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", function (req, res) {
    console.log('at get');
    res.json(projects.getProjects());
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