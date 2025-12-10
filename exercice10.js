function sommeIterative(n) {
  let somme = 0;
  while (n>0) {
    somme += n;
    n--;
  }
  return somme;
}
function sommeRecursive(n){
    return n <= 1 ? n : n + sommeRecursive(n - 1);
}

console.log(sommeIterative(5));
console.log(sommeRecursive(5))