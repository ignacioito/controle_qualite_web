var diviseur = 3, resultat1, resultat2, resultat3;
resultat1 = (16 + 8) / 2 - 2 ; 
//resultat2 = result1 / diviseur;
resultat3 = resultat1 % diviseur; alert(resultat2); // Résultat de la division : ??? alert(resultat3); // Reste de la division : ???
document.write("Hello World");

function LetraMaj(){
    var str = "cette phrase sera majuscule!";
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;

}

function LetraMin(){
    var str = "cette phrase sera minuscule!";
    var res = str.toLowerCase();
    document.getElementById("demos").innerHTML = res;

}


var a = prompt("Rentrez le premier chiffre");
var b = prompt("Rentrez le second chiffre");
var some = parseInt(a) + parseInt(b);
alert(some);

var texte, nombre1 = 4, nombre2 = 2; 
texte = nombre1 + '' + nombre2; alert(texte);
document.write(texte);