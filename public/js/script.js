
// Afficher la liste des produits

$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3048/affiche_produits',
        method: "GET",
        success: function (data) {

            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('ul').append('<li class="list-group-item">Type : ' + data[i].type + " Produit : " + data[i].nom + " Prix : " + data[i].prix + " Quantité : " + data[i].quantite + '</li>');
            }
        }
    })
})
