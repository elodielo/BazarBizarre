import { Cartes } from "./class/Carte.js";

let boutonLancerJeu = document.getElementById("lancerJeu");
let endroitOuJeu = document.getElementById("placeDeJeu");
let endroitTimer = document.querySelector("#decompteTemps h3");
let endroitScore = document.querySelector("#compteScore h3");
let endroitRegle = document.getElementById("regleJeu")
let boutonMontagne = document.getElementById("boutonMontagne")
let boutonCrabe = document.getElementById("boutonCrabe")
let boutonFantome = document.getElementById("boutonFantome")
let boutonLivre = document.getElementById("boutonLivre")
let boutonSucette = document.getElementById("boutonSucette")
let boutons = document.querySelectorAll(".bouton")

let ImageBonneCouleur = false;

boutonLancerJeu.addEventListener("click", lanceJeu)

regleJeu.addEventListener("click", ()=> {
    console.log("les regles vont s\'afficher");
    let divRegle = document.createElement("div");
    divRegle.classList.add("divRegle");
    divRegle.innerText = "les règles";
    regleJeu.appendChild(divRegle)
    
    document.addEventListener('click', (event) => {
        if (!regleJeu.contains(event.target)){
            divRegle.remove();
        }
    })
    
})

boutons.forEach((element) => {
        element.addEventListener("click", () => {
            endroitOuJeu.innerHTML = "";
            if (ImageBonneCouleur == true) {
                console.log("c'est gagné");
            }

            else {
                console.log("C'est perdu");
            }
        }); 
    });


function lanceJeu(){
    lancerDecompteTemps();
    EnvoiDesCartes();
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

function EnvoiDesCartes(){
    for (let i=0; i<2; i++){
        afficherImage("./imagesSansFond/crabeBlanc.png")
    }
}

