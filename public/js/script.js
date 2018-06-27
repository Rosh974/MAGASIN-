
// Afficher la liste des produits

$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:' + port + 'affiche_produits',
        method: "GET",
        success: function (data) {

            console.log(data);
            $('').append( );

        }
    })
})
