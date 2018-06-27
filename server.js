const express = require('express');
var app = express();
var ejs = require('ejs');
var port = 3007;

app.use(express.static('public'));
app.set('view engine', 'ejs');





app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});


app.listen(port, function(){
    console.log('on')
});