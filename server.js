const express = require('express');
var app = express();
var ejs = require('ejs');
var port = 3048;
var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/"+port;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
})



// Afficher la liste des produits

app.get('/affiche_produits', function (req, res) {

    MongoClient.connect(url, function (err, database) {
      if (err) throw err;
      console.log("Connecté à la base de données");
      var dbo = database.db("magasin");
  
      dbo.collection("produits").find({}).toArray(function (err, result) {
        if (err) throw err;
        tab = result;
        res.json(tab);
        database.close();
  
      });
    });
  });
  


app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});


app.listen(port, function(){
    console.log('on')
});
