var express = require('express');
var mybuf = fs.readFileSync("index.html","utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.send( mybuf.toString()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
