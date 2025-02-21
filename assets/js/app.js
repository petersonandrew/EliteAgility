var express = require('express')
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(express.static("./"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(80, function () {
    console.log("app running on port.", server.address().port);
});
