/* 
 * To change this license header, choose License Haeders in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function AfficherTouche() {
    ValeurTouche = $(this).val();


    if (ValeurTouche !== "=") {
        $("#resultat").val($("#resultat").val() + ValeurTouche);

    } else {
        var res = $("#resultat").val();
        $("#resultat").val(eval(res));
    }



}
function Clear() {
    ValeurTouche = "";
    $("#resultat").val("");
}


$(document).ready(function () {
    $(".touche").click(AfficherTouche);
});
