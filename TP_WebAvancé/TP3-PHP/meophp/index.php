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
        $i = '1';
        if ($i=='1'){
               echo "TEST";
        }
        ?>
       <!-- <form action="php/traitement.php" method="get">
            <label for="loginGet"> Votre login :
                <input type="text" name="login" id="loginGet"/>
            </label><br/><br/>
                <label for="motDePasseGet"> Votre mot de passe :
                <input type="password" name="motDePasse" id="motDePasseGet"/>
            </label><br/><br/>
            <input type="submit" value="Envoyer avec GET"/> <br/><br/> 
        </form> -->
        <form action="php/traitement.php" method="post">
            <label for="loginPost"> Votre login :
                <input type="text" name="login" id="loginPost"/>
            </label><br/><br/>
                <label for="motDePassePost"> Votre mot de passe :
                <input type="password" name="motDePasse" id="motDePassePost"/>
            </label><br/><br/>
            <input type="submit" value="Envoyer avec POST"/> <br/><br/> 
        </form>
        
    </body>
</html>
