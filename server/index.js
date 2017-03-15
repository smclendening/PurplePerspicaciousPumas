var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, function() {
	console.log('App is listening on port: ', port);
})