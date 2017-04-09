var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.use('/', express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(8080, function() {
    console.log('listening on *:8080');
});
