let min = Number(prompt("Entrer le nombre minimal :"));
let max= Number(prompt("Entrer le nombre maximal :"));

for(let i=min; i<=max ; i++){
    if(i%3 ===0 && i%5===0){
        console.log("Five&Three");
    }else if (i%5===0){
        console.log("Five");
    }else if(i%3===0){
        console.log("Three");
    }else{
        console.log(i);
    }
}