var express = require('express');
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  var mybuf = new Buffer(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
    response.send(mybuf.toString()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
