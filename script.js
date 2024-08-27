/**
 * Ecercice Pokecount
 */
"use strict";
// récupère le premier <h2> du docuement
// document.querySelector('h2').textContent = '20';

let compteur = 0;
// récupérer un élément unique (par son id par exemple)
const compteurEL = document.getElementById('compteur-el');
const sauvegardeEl = document.getElementById('sauvegarde-el')

console.log(compteur, compteurEL, sauvegardeEl);

//fonction qui incrémente le compteur et met à jour le texte du <h2>
function capturer() {
    compteur+= 1;
    compteurEL.textContent = compteur;
}
//fonction pour sauvegarder
function sauvegarder() {
    sauvegardeEl.textContent += ` ${compteur} Pokémons |` ;
    localStorage.setItem("Captures", sauvegardeEl.textContent)
    compteur = 0;
    compteur.textContent = compteur;
}

capturer();
sauvegarder();

//ecouter éléments
document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
//quand l'onglet du navigateur à finit de charger
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures");
})

}