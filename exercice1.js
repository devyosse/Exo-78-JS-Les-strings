let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte
let longueur = monTexte.length;
alert(monTexte);
console.log(monTexte)

//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let position = monTexte.indexOf("i");
document.getElementById('position').innerHTML = position;

let letter = monTexte.toUpperCase();
console.log(letter);

document.getElementById('chaineMaj').innerHTML = letter;

for(let i= 0; i<monTexte.length; i++){
   if(letter.includes('A')){
       alert(monTexte[i]);
   }
}

