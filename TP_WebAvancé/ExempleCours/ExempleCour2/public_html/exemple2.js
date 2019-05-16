/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cpt = 3;
function changeCouleur(){
    $(this).css("background-color", "red");
    $("form").append("<input type=\"button\" value=" + cpt +">");
cpt += 1;
}


function afficheValeur(){
    var valBouton = $(this).val();
    $("#duTexte").css("background-color", "white");
     $("#duTexte").css("color", "red");
      $("#duTexte").text(valBouton);
}



$(document).ready(function(){
 // $("#duTexte").text("Un autre texte");
 //  $(":button").val("un boutton");
  $("#duTexte").click(changeCouleur);
//  $(":button").mouseover(afficheValeur);
$(document).on("mouseover", ":button", afficheValeur);
});

