const express = require('express');
var app = express();
var port = 3013

app.use(express.static('public'));
app.set('view engine', 'ejs');




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
        db.close();
  
      });
    });
  });
  



app.listen(port, function(){
    console.log('on')
})

