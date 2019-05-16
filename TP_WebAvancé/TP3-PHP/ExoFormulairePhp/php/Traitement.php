<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        
        $nom = $_POST["nom"];
        $prenom = $_POST["prenom"];
        $date = $_POST["ddn"];
        
        /*
            echo "Votre Nom est : " . $_POST["nom"] . "<br/>";
            echo "Votre Prénom est : " . $_POST["prenom"] . "<br/>";
            echo "Votre Date de Naissance est : " . $_POST["ddn"] . "<br/>";
        */
        
         require_once 'fonction.inc.php';
         AfficherFormulaire($nom, $prenom, $date);
         

         setcookie("monNom", $nom,0,"/");
         setcookie("monPrenom", $prenom,0,"/");
         
         AfficherCookie();
        ?>
    </body>
</html>
