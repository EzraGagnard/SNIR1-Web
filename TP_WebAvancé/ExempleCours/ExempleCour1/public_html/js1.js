/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function AfficherLogin(){
    window.document.forms["monForm"].loginBis.value = window.document.forms["monForm"].login.value;
}

function demanderNom(){
    nom = prompt("Quels est votre nom?");
    alert("Salut : " + nom);
}

function confirmaton(){
    envoyer = confirm("êtes vous certains de vouloir envoyer les données ?");
    if (envoyer == true){
        document.forms["monForm"].submit();
    }
}

function AfficheInfo(){
    var texteDeLaDiv = document.getElementById("divClique").textContent;
    alert("texte dans la div : " + texteDeLaDiv);
}