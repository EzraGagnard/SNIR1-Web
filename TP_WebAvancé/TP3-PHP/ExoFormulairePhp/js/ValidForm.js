function Verification()
{

    var mdp = $("#mdp").val();
    var confmdp = $("#confmdp").val();

    if (mdp !== confmdp) {
        alert("Les mots de passes ne sont pas identiques !");
    }
}

function selectionVersion() {

    var ChoixOS = $(this).val();
    
    $("#version").empty();

    if (ChoixOS === "Windows") {
        $('#version').append($("<option>", {value: "XP"}).text("XP"));
        $('#version').append($("<option>", {value: "Vista"}).text("Vista"));
        $('#version').append($("<option>", {value: "Seven"}).text("Seven"));
    }

    if (ChoixOS === "Linux") {
        $('#version').append($("<option>", {value: "Debian"}).text("Debian"));
        $('#version').append($("<option>", {value: "Ubuntu"}).text("Ubuntu"));
        $('#version').append($("<option>", {value: "Fedora"}).text("Fedora"));
        $('#version').append($("<option>", {value: "SuSE"}).text("SuSE"));
        $('#version').append($("<option>", {value: "Mint"}).text("Mint"));
    }

    if (ChoixOS === "Mac os") {
        $('#version').append($("<option>", {value: "Tiger"}).text("Tiger"));
        $('#version').append($("<option>", {value: "Leopard"}).text("Leopard"));
        $('#version').append($("<option>", {value: "Snow leopard"}).text("Snow leopard"));
        $('#version').append($("<option>", {value: "Lion"}).text("Lion"));
    }

}

$(document).ready(function ()
{
    $("#inscription").click(Verification);
    $("#SE").change(selectionVersion);
});