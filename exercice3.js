let input = prompt("Veuillez entrer un nombre :");
let nombre = parseFloat(input);

if(isNaN(nombre)){
    alert("Ce n'est pas un nombre valide !");
} else{
    if(nombre<0){
        alert("Nombre negatif");
    }else if (nombre <= 10){
        alert("Petit");
    }else if (nombre <= 50){
        alert("Moyen");
    }else if(nombre >50){
        alert("Grand");
    }else if(nombre >100 ){
        alert("Tres grand");
    }
}