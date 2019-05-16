<?php
$source=$_GET['typeDemande'];
require_once '../inc/fonctions.inc';

switch ($source){
    case 'o':getListeOs(); break;
    case 'v':getListeVersionsFromIdOs($_GET['os']);break;
    
}

