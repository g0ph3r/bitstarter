var express = require('express');
var mybuf = fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
 mybuf.toString() 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
