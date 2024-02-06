import { Carte } from "./class/Carte.js";

let boutonLancerJeu = document.getElementById("lancerJeu");
let endroitOuJeu = document.getElementById("placeDeJeu");
let endroitTimer = document.querySelector("#decompteTemps h3");
let endroitScore = document.querySelector("#compteScore h3");
let endroitRegle = document.getElementById("regleJeu");
let boutonMontagne = document.getElementById("boutonMontagne");
let boutonCrabe = document.getElementById("boutonCrabe");
let boutonFantome = document.getElementById("boutonFantome");
let boutonLivre = document.getElementById("boutonLivre");
let boutonSucette = document.getElementById("boutonSucette");
let boutons = document.querySelectorAll(".bouton");

let ImageBonneCouleur = false;

boutonLancerJeu.addEventListener("click", lanceJeu);

regleJeu.addEventListener("click", () => {
  console.log("les regles vont s'afficher");
  const divRegle = document.createElement("div");
  const titreRegle = document.createElement("h3");
  titreRegle.innerText = "les règles";
  const paragrapheJeu1 = document.createElement("p")
  const paragrapheJeu2 = document.createElement("p")
  paragrapheJeu1.innerText = "Si l'image est de la bonne couleur, clique sur l'objet correspondant."
  paragrapheJeu2.innerText = "Si aucun objet n'est de la bonne couleur, clique sur l'image qui n'est ni de la même forme, ni de la même couleur"
  divRegle.classList.add("divRegle");
  regleJeu.appendChild(divRegle);
  divRegle.append(titreRegle, paragrapheJeu1, paragrapheJeu2)
  document.addEventListener("click", (event) => {
    if (!regleJeu.contains(event.target)) {
      divRegle.remove();
    }
  });
});

boutons.forEach((element) => {
  element.addEventListener("click", () => {
    if (ImageBonneCouleur == true) {
      console.log("c'est gagné");
    } else {
      console.log("C'est perdu");
    }
    endroitOuJeu.innerHTML = "";
  });
});

function lanceJeu() {
  lancerDecompteTemps();
  EnvoiDesCartes();
}

function lancerDecompteTemps() {
  let temps = 30;
  let interval = setInterval(() => {
    temps = temps - 1;
    endroitTimer.innerText = temps;
    if (temps == 0) {
      endroitTimer.innerText = "Looser";
      clearInterval(interval);
    }
  }, 1000);
}

function EnvoiDesCartes() {
  for (let i = 0; i < 2; i++) {
    afficherImageAleatoire();
  }
}

function afficherImageAleatoire() {
  const formes = ["fantome", "crabe", "sucette", "montagne", "livre"];
  const couleurs = ["bleu", "vert", "blanc", "rouge", "gris"];
  let chiffreHasard = Math.floor(Math.random() * 5);
  new Carte(formes[chiffreHasard], couleurs[chiffreHasard]);
}
