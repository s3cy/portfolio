var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.set('port', (process.env.PORT) || 8080); // for heroku deployment

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.listen(app.get('port'), function() {
    console.log(`listening on *:${app.get('port')}`);
});
