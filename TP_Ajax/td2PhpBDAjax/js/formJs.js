
/************ Question 1 : Ajout fonction pour afficher liste des versions *********************/
function genererListeOs() {
    // on initialise la valeur du champs ayant pour id typeDemande
    // avec la lettre 'o'
    $("#typeDemande").val('o');
    $("#os").empty();
    $("#os").append('<option value="-1">Sélectionnez un SE</option>');
    $.ajax({
        url: 'php/controleur.php',
        data: $("#typeDemande").serialize(), // on envoie typeDemande='o'
        type: 'GET',
        dataType: 'json',
        success: // si la requete fonctionne, mise à jour de la liste des versions
                function (objetJson) {
                    $.each(objetJson, function (index, ligne) {
                        // ligne contient un objet json de la forme
                        // {"idOs" : "id de l'os"},
                        // {"nomOs" : "nom de l'os"}
                        $("#os").append('<option value="' + ligne.idOs + '">' + ligne.nomOs + '</option>');
                    });
                },
        error:
                function (xhr, status, error) {
                    console.log("param : " + JSON.stringify(xhr));
                    console.log("status : " + status);
                    console.log("error : " + error);
                }
    });
}

function genererListeVersions()
{
    var idOs = $(this).val(); // on récupère la valeur de la clef primaire correspondant à l'os
    // changement de la valeur du type de demande pour faire appel à la fonction majListeOs
    $("#typeDemande").val('v');

    $("#version").empty(); // on vide la liste des départements
    $("#version").append('<option value="-1">Choisissez une version</option>');

    if (idOs != '-1') { // si l'os selectionné existe (pas le "choisissez un os")
        // appel à la page majListeOs via ajax
        $.ajax({
            url: 'php/controleur.php',
            data: $("#formulaire").serialize(),
            // typeDemande='r' & 
            // idDepartement=-1 & 
            // idVille=-1 & 
            // idRegion=idDeLaRegionSelectionnée
            type: 'GET',
            dataType: 'json',
            success: // si la requete fonctionne, mise à jour de la liste des versions
                    function (objetJson) {
                        $.each(objetJson, function (index, ligne) {
                            // ligne contient un objet json de la forme
                            // {"idVersion" : "id de la version"},
                            // {"nomVersion" : "nom de la version"}
                            $("#version").append('<option value="' + ligne.idVersion + '">' + ligne.nomVersion + '</option>');
                        });
                    },
            error:
                    function (xhr, status, error) {
                        console.log("param : " + JSON.stringify(xhr));
                        console.log("status : " + status);
                        console.log("error : " + error);
                    }
        });
    }
}
/*****************************************************************************************/

/************ Question 2 : Ajout fonction pour gérer le login au click *********************/
function verifierLoginBoutton() {

    // appel du script controleur.php via ajax
    $.ajax({
        url: 'php/getLogin.php',
        data: $("#formulaire").serialize(), // serialisation des données du formulaire (toutes les balises ayant un champs "name"
        type: 'POST',
        dataType: 'json',
        success: // si la requete fonctionne, mise à jour de la couleur de pastille
                function (objetJson) {

                    if (objetJson == true) {
                        alert("Le login existe déjà, choisissez en un autre!");
                    } else {
                        alert("Le login est nouveau");
                    }

                },
        error:
                function (xhr, status, error) {
                    console.log("param : " + JSON.stringify(xhr));
                    console.log("status : " + status);
                    console.log("error : " + error);
                }
    });
}
/*****************************************************************************************/

/************ Question 3 : Ajout fonction pour gérer le login au changement *********************/
function verifierLoginChangement() {

    // appel du script controleur.php via ajax
    $.ajax({
        url: 'php/getLogin.php',
        data: $("#formulaire").serialize(), // serialisation des données du formulaire (toutes les balises ayant un champs "name"
        type: 'POST',
        dataType: 'json',
        success: // si la requete fonctionne, mise à jour de la couleur de pastille
                function (objetJson) {
                    $("#login").next("span").remove();
                    if (objetJson == true) {
                        $("<span style = 'color:red; margin-left:440px'><b>Ce login existe déjà</b></span>").insertAfter("#login");
                    } else {
                        $("<span style = 'color:green; margin-left:440px'><b>Ce nouveau login est correct</b></span>").insertAfter("#login");
                    }

                },
        error:
                function (xhr, status, error) {
                    console.log("param : " + JSON.stringify(xhr));
                    console.log("status : " + status);
                    console.log("error : " + error);
                }
    });
}
/*****************************************************************************************/


$(document).ready(function ()
{
    genererListeOs();

    // gestion liste deroulante
    $("#os").change(genererListeVersions);

    /************ Question 2 : Ajout fonction pour gérer le login avec bouton inscription *********************/
    //gestion login
    $("#inscription").click(verifierLoginBoutton);

    /************ Question 3 : Ajout fonction pour gérer le login avec changement *********************/
    //gestion login
    $("#login").change(verifierLoginChangement);
    $(document).on("change", "#login", verifierLoginChangement);
});
