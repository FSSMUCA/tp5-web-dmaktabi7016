function factorielle(n) {
  if (n<0){
    return "Erreur";
  }
  if (n === 0) {
    return 1;
  } 

  else {
    return n * factorielle(n - 1);
  }
}


console.log("factorielle(5) = " + factorielle(5));   
console.log("factorielle(0) = " + factorielle(0));   
console.log("factorielle(3) = " + factorielle(3));  
console.log("factorielle(7) = " + factorielle(7));   
