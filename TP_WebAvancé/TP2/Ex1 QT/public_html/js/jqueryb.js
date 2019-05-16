/*
function Multiplication(){
    var val1 = window.document.forms["multiplication"].val1.value;
    console.log("val1:"+val1);
    var val2 = window.document.forms["multiplication"].val2.value;
    console.log("val2:"+val2);
    var resultat = val1 * val2;
    window.document.forms["multiplication"].resultmult.value = resultat;
}
function Addition(){
    var val1 = window.document.forms["addition"].valadd1.value;
    console.log("val1:"+val1);
    var val2 = window.document.forms["addition"].valadd2.value;
    console.log("val2:"+val2);
    var resultat = eval(val1) + eval(val2);
    window.document.forms["addition"].resultadd.value = resultat;
}


$(document).ready(function(){
    // association entre l'élément ayant pour id "egale"
    // avec la fonction Multiplier pour l'événement click
    $("#egale").click(Multiplier);
    // association entre l'élément ayant pour id "egaleadd"
    // avec la fonction Additionner pour l'événement click
    $("#egaleadd").click(Additionner);
});
*/

function Multiplication(){
    var val1 = window.document.forms["multiplication"].val1.value;
    var val2 = window.document.forms["multiplication"].val2.value;
    var resultat = val1 * val2;
    window.document.forms["multiplication"].resultmult.value = resultat;
}

function Addition(){
    var val1 = window.document.forms["addition"].val1add.value;
    var val2 = window.document.forms["addition"].val2add.value;
    
    var resultat = eval(val1) + eval(val2);
    window.document.forms["addition"].resultat.value = resultat;
}

$(document).ready(function(){
    $("#egale").click(Multiplier);
    $("#egaleadd").click(Additionner);
});