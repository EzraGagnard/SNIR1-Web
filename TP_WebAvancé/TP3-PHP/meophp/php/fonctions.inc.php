<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function TraiterLogin() {
    if ($_GET['login']) {
        echo "MODE GET" . "<br/>";
        echo "LOGIN: " . $_GET['login'] . "<br/>";
        echo "MDP: " . $_GET['motDePasse'] . "<br/>";
    }
    if ($_POST['login']) {
        echo "MODE POST" . "<br/>";
        echo "LOGIN: " . $_POST['login'] . "<br/>";
        echo "MDP: " . $_POST['motDePasse'] . "<br/>";
    }
}

function VerifierLogin($log, $mdp){
    $retour = FALSE;
    if($log == "toto" && $mdp == "toto"){
        $retour = TRUE;
    }
    return $retour;
}