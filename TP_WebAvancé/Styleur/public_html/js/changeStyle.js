function changerCouleurBordure()
{
    var coul = $("#couleurBordure").val();
    $("#divTest").css("border-color", coul);
}
function changerLargeurBordure()
{
        var lar = $("#largeurBordure").val();
		var larpx = lar + "px";
        $("#divTest").css("border-width", larpx);
}

function changerStyleBordure()
{
       var style=$("#styleBordure").val();
        $("#divTest").css("border-style", style);
    }

$(function () {
   
    
    /*  gestion bordure */
    $("#couleurBordure").change(changerCouleurBordure);

    $("#largeurBordure").change(changerLargeurBordure);

    $("#styleBordure").change(changerStyleBordure);

    /*  gestion ombre */
    
});
