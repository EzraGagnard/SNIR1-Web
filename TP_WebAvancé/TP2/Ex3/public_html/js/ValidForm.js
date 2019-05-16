function Verification()
{

var mdp = $("#mdp").val();
var confmdp = $("#confmdp").val();

    if(mdp !== confmdp){
        alert("Les mots de passes ne sont pas identiques !");
    }
}


$(document).ready(function ( )
{
    $("#inscription").click(Verification);
});