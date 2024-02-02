import { Cartes } from "./Carte.js";

const tableauCouleur = ["blanc", "gris", "rouge" ,"vert", "bleu"];
const tableauForme = ["fantome", "sucette", "montagne", "crabe", "livre"]


let boutonLancerJeu = document.getElementById("lancerJeu");
let endroitOuJeu = document.getElementById("placeDeJeu");
let endroitTimer = document.querySelector("#decompteTemps h3");
let endroitScore = document.querySelector("#compteScore h3")

 boutonLancerJeu.addEventListener("click", lanceJeu)

 function lanceJeu(){
    lancerDecompteTemps();
 }

function donneChiffreHasard() {
   let chiffreHasard = Math.floor(Math.random()*4)
    return chiffreHasard;
}

function afficherImage(URL) {
    let image = document.createElement("img")
    image.src = URL
    endroitOuJeu.appendChild(image)
}

function lancerDecompteTemps(){
    let temps = 30;
    let interval = setInterval(() => {
        temps = temps-1
        endroitTimer.innerText = temps
    if (temps == 0){
        endroitTimer.innerText = "Looser"
        clearInterval(interval)
    }}, 1000)
}

    // let boutonMontagne = document.getElementById("boutonMontagne")
    // let boutonCrabe = document.getElementById("boutonCrabe")
    // let boutonFantome = document.getElementById("boutonFantome")
    // let boutonLivre = document.getElementById("boutonLivre")
    // let boutonSucette = document.getElementById("boutonSucette")
    // let boutons = document.getElementsByClassName("bouton")

    // boutons.forEach(element => {
    //     element.addEventListener("click", () => {
    //         console.log("coucou");
    //     }); 
    // });



for (let i=0; i<2; i++) {
let carte = new Cartes("","")
console.log(carte);}