const express = require('express');
var app = express();
var ejs = require('ejs');
var port = 3013;
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

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
  
// fonction ajout de produits

app.post('/get_produits', function (req, res) {
    var nom = req.body.nom
    console.log(nom)
    var type = req.body.type
    console.log(type)
    var prix = req.body.prix
    console.log(prix)
    var quantité = req.body.quantité
    console.log(quantité)
    MongoClient.connect(url, function (err, database) {
      if (err) throw err;
      console.log("Connecté à la base de données");
      var dbo = database.db("magasin");
      var newproduit = { nom: nom, type: type, prix: prix, quantite: quantité};
      dbo.collection("produits").insertOne(newproduit, function(err, res) {
        if (err) throw err;
        console.log("1 document inserer");
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
