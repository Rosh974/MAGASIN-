
// Afficher la liste des produits

$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3013/affiche_produits',
        method: "GET",
        success: function (data) {

            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('ul').append('<li class="list-group-item">Type : ' + data[i].type + " Produit : " + data[i].nom + " Prix : " + data[i].prix + " Quantité : " + data[i].quantite + '</li>');
            }
        }
    })

// post les infos du produit a ajouter dans la base de donnée

$( "#send" ).click(function() {

    var nom = $('#nomproduit').val();   
    console.log(nom)
    var type = $('#typeproduit').val();   
    console.log(type)
    var prix = $("#prixproduit").val();
    console.log(prix)
    var quantité = $("#qtproduit").val();
    console.log(quantité)
 var url = "http://localhost:3013/get_produits"
 $.post( url, {nom: nom,type: type, prix: prix, quantité: quantité}, function( data ) {
     console.log(data);
  });

});

})

