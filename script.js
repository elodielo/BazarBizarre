import { Carte } from "./class/Carte.js";

let boutonLancerJeu = document.getElementById("lancerJeu");
let endroitOuJeu = document.getElementById("placeDeJeu");
let endroitTimer = document.querySelector("#decompteTemps h3");
let endroitScore = document.querySelector("#compteScore h3");
let endroitRegle = document.getElementById("regleJeu");
let boutons = document.querySelectorAll(".bouton");
let bonChiffreDesHasard = -1;
let temps = 5;
let score = 0;
const formes = ["montagne", "crabe", "fantome", "livre", "sucette"];
const couleurs = ["gris", "rouge", "blanc", "bleu", "vert"];

boutonLancerJeu.addEventListener("click", lanceJeu);

regleJeu.addEventListener("click", () => {
  console.log("les regles vont s'afficher");
  const divRegle = document.createElement("div");
  const titreRegle = document.createElement("h3");
  titreRegle.innerText = "les règles";
  const paragrapheJeu1 = document.createElement("p")
  const paragrapheJeu2 = document.createElement("p")
  const paragrapheJeu3 = document.createElement("p")
  paragrapheJeu1.innerText = "Si l'image est de la bonne couleur, clique sur l'objet correspondant."
  paragrapheJeu2.innerText = "Si aucun objet n'est de la bonne couleur, clique sur l'image qui n'est ni de la même forme, ni de la même couleur"
  paragrapheJeu3.innerText = "Si deux images sont les mêmes, toujours choisir la deuxième"
  divRegle.classList.add("divRegle");
  regleJeu.appendChild(divRegle);
  divRegle.append(titreRegle, paragrapheJeu1, paragrapheJeu2, paragrapheJeu3)
  document.addEventListener("click", (event) => {
    if (!regleJeu.contains(event.target)) {
      divRegle.remove();
    }
  });
});

boutons.forEach((element) => {
// 
  element.addEventListener("click", () => {
    console.log(element.id == "bouton"+formes[bonChiffreDesHasard])
    if (element.id == "bouton"+formes[bonChiffreDesHasard])
    {
      messageReussite()
      EcrireScore(IncrementerPoints());
      setTimeout(() => EnvoiDesCartes(), 1000)
    }
    else {messageDefaite()
      EcrireScore(DecrementerPoints())
      setTimeout(() => EnvoiDesCartes(), 1000);}
  });
});

function lanceJeu() {
  EnvoiDesCartes();
  lancerDecompteTemps()
  boutonLancerJeu.removeEventListener('click', lanceJeu)
}

function lancerDecompteTemps() {
  let interval = setInterval(() => {
    temps = temps - 1;
    endroitTimer.innerText = temps;
    if (temps == 0 || temps <0) {
      endroitTimer.innerText = "Partie terminée";
      afficherMessageFindePartie(score);
      clearInterval(interval);
      temps = 100
      boutonLancerJeu.addEventListener("click", lanceJeu);
      score = 0
      endroitScore.innerText ="score"
    }
  }, 1000);
  
}

function IncrementerPoints(){
  score += 10
  return score
}

function DecrementerPoints() {
  score = score -10;
  return score
}

function EcrireScore(score) {
  endroitScore.innerHTML = score;
}


function EnvoiDesCartes() {
  endroitOuJeu.innerHTML = "";
    afficherImageAleatoire(2);
}

function afficherImageAleatoire(nbrCartes) {
  let ChiffreHasardEnregistreFormes = -1;
  let ChiffreHasardEnregistreCouleurs = -2;
  let i = 0;
  let tableauChiffres = [0,1,2,3,4]
  let tableauDelimination = []
  while (i < nbrCartes ) {
    let chiffreHasardFormes = Math.floor(Math.random() * 5);
    let chiffreHasardCouleurs = Math.floor(Math.random() * 5);

    if (chiffreHasardFormes != ChiffreHasardEnregistreFormes 
      && chiffreHasardCouleurs != ChiffreHasardEnregistreCouleurs 
      && chiffreHasardCouleurs != ChiffreHasardEnregistreFormes
      && chiffreHasardFormes != ChiffreHasardEnregistreCouleurs){
          let carte = new Carte(formes[chiffreHasardFormes], couleurs[chiffreHasardCouleurs]);

          tableauDelimination.push(chiffreHasardCouleurs);
          tableauDelimination.push(chiffreHasardFormes);
          i++;
          
          if (chiffreHasardFormes == chiffreHasardCouleurs) {
            bonChiffreDesHasard = chiffreHasardFormes
           
          }
         else if (ChiffreHasardEnregistreCouleurs == ChiffreHasardEnregistreFormes){
            bonChiffreDesHasard = ChiffreHasardEnregistreCouleurs;
          }
          else{
            bonChiffreDesHasard = tableauChiffres.filter(function (item) {
            return tableauDelimination.indexOf(item) == -1;
          })
              }
  
              ChiffreHasardEnregistreFormes = chiffreHasardFormes;
              ChiffreHasardEnregistreCouleurs = chiffreHasardCouleurs;
            }
}

}


function messageReussite() {  
  let message = document.createElement("p")
  message.innerText = "c'est gagné !"
  message.classList.add("messageReussite")
  endroitOuJeu.appendChild(message)
}

function messageDefaite() {  
  let message = document.createElement("p")
  message.innerText = "c'est perdu"
  message.classList.add("messagePerdu")
  endroitOuJeu.appendChild(message)
}

function afficherMessageFindePartie(score){
    let boiteFin = document.createElement("div")
    let messageFin = document.createElement("p")
    messageFin.innerText = `Partie terminée, tu as ${score} points`
    boiteFin.classList.add("messageFinDePartie")
    endroitOuJeu.appendChild(boiteFin)
    boiteFin.appendChild(messageFin)

}


