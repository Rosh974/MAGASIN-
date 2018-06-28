
// Afficher la liste des produits

$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3048/affiche_produits',
        method: "GET",
        success: function (data) {

            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $('ul').append('<li class="list-group-item">Type : ' + data[i].type + " Produit : " + data[i].nom + " Prix : " + data[i].prix + " Quantité : " + data[i].quantite + '   <button type="button" class="btn btn-primary editer" data-toggle="modal" data-target="#updatemodal" data-nom='+data[i].nom+ 'data-type=' + data[i].type + 'data-prix=' + data[i].prix + 'data-quantite=' + data[i].quantite + 'data-id = ' + data[i]._id +'> Modifier </button></li>');
            }
        }
    })

    // post les infos du produit a ajouter dans la base de donnée

    $("#send").click(function () {

        var nom = $('#nomproduit').val();
        console.log(nom)
        var type = $('#typeproduit').val();
        console.log(type)
        var prix = $("#prixproduit").val();
        console.log(prix)
        var quantité = $("#qtproduit").val();
        console.log(quantité)
        var url = "http://localhost:3048/get_produits"
        $.post(url, { nom: nom, type: type, prix: prix, quantité: quantité }, function (data) {
            console.log(data);
        });

    });

})

// $('#updatemodal').on('shown.bs.modal', function () {
//     $('#nom-p').trigger('focus')
//   })


//Fonction pour modifier les données dans la database 
$('#update').click(function () {

    var id_produit = $('#id-p').val();
    var nom_produit = $('#nom-p').val();
    console.log(nom_produit);
    var type_produit = $('#type-p').val();
    console.log(type_produit);
    var prix_produit = $('#prix-p').val();
    console.log(prix_produit);
    var quantite_produit = $('#quantite-p').val();
    console.log(quantite_produit);

    $.ajax({
        url: 'http://localhost:3048/modifie_produits',
        method: "PUT",
        data: { nom: nom_produit, type: type_produit, prix: prix_produit, quantite: quantite_produit },
        success: function (data) {

            $('#update_message').html('<div class="alert alert-success" role="alert">Données enregistrées !</div>');

        }
    });
});

// fonction qui récupère et affiche les données dans le modal

$('.editer').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var nom = button.data('nom') // Extract info from data-* attributes
    var type = button.data('type') // Extract info from data-* attributes
    var prix = button.data('prix') // Extract info from data-* attributes
    var quantite = button.data('quantite') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Mise à jour des données de : ' + nom)
    modal.find('.modal-body #nom-p').val(nom);
    modal.find('.modal-body #type-p').val(type);
    modal.find('.modal-body #prix-p').val(prix);
    modal.find('.modal-body #quantite-p').val(quantite);
})