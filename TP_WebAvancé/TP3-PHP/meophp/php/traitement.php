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

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* echo $_GET['login'];
  echo "MDP:  ";
  echo $_GET['motDePasse'];
 * 
 */

echo "LOGIN: " . $_POST['login'] . "<br/>";
echo "MDP: " . $_POST['motDePasse'] . "<br/>";
$login = $_POST["login"];
$mdPasse = $_POST["mdPasse"];

require_once './fonctions.inc.php';
if (VerifierLogin($login, $mdPasse)) {
    echo "LOGIN OK MDP OK";
}
?>
   </body>
</html>
