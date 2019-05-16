/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Multiplication(){
    var val1 = window.document.forms["multiplication"].val1.value;
    console.log("val1:"+val1);
    var val2 = window.document.forms["multiplication"].val2.value;
    console.log("val2:"+val2);
    var resultat = val1 * val2;
    window.document.forms["multiplication"].resultmult.value = resultat;
}
function Addition(){
    var val1 = window.document.forms["addition"].numadd1.value;
    console.log("val1:"+val1);
    var val2 = window.document.forms["addition"].numadd2.value;
    console.log("val2:"+val2);
    var resultat = eval(val1) + eval(val2);
    window.document.forms["addition"].resultadd.value = resultat;
}
