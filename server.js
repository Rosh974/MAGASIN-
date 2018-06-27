const express = require('express');
var app = express();
var port = 3013
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.listen(port, function(){
    console.log('on')
})