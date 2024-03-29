import { Carte } from "./class/Carte.js";

let boutonLancerJeu = document.getElementById("lancerJeu");
let endroitOuJeu = document.getElementById("placeDeJeu");
let endroitTimer = document.querySelector("#decompteTemps h3");
let endroitScore = document.querySelector("#compteScore h3");
let endroitRegle = document.getElementById("regleJeu");
let boutons = document.querySelectorAll(".bouton");
let bonChiffreDesHasard = -1;
let temps = -1;
let score = 0;
const formes = ["montagne", "crabe", "fantome", "livre", "sucette"];
const couleurs = ["gris", "rouge", "blanc", "bleu", "vert"];

boutonLancerJeu.addEventListener("click", lanceJeu);

regleJeu.addEventListener("click", () => {
  const divRegle = document.createElement("div");
  const titreRegle = document.createElement("h3");
  titreRegle.innerText = "les règles";
  const paragrapheJeu1 = document.createElement("p");
  const paragrapheJeu2 = document.createElement("p");
  const paragrapheJeu3 = document.createElement("p");
  const paragrapheJeuInit = document.createElement("p");
  paragrapheJeuInit.innerText =
    "Deux images vont s'afficher à l'écran. Choisis le bon bouton pour gagner un maximum de points en 1 minute!";

  paragrapheJeu1.innerText =
    "Si l'image est de la bonne couleur, clique sur le bouton correspondant (La montagne est grise, le crabe est rouge, le fantome est blanc, le livre est bleu et la sucette est verte).";
  paragrapheJeu2.innerText =
    "Si les deux images sont de la bonne couleur, la deuxième doit être choisie.";

  paragrapheJeu3.innerText =
    "Si aucun objet n'est de la bonne couleur, clique sur l'image qui n'est représenté ni par sa forme ni par sa couleur.";
  divRegle.classList.add("divRegle");
  regleJeu.appendChild(divRegle);
  divRegle.append(
    titreRegle,
    paragrapheJeuInit,
    paragrapheJeu1,
    paragrapheJeu2,
    paragrapheJeu3
  );
  document.addEventListener("click", (event) => {
    if (!regleJeu.contains(event.target)) {
      divRegle.remove();
    }
  });
});

boutons.forEach((element) => {
  element.addEventListener("click", () => {
    if (temps > 1) {
      if (element.id == "bouton" + formes[bonChiffreDesHasard]) {
        messageReussite();
        EcrireScore(IncrementerPoints());
        setTimeout(() => EnvoiDesCartes(), 1000);
      } else {
        messageDefaite();
        EcrireScore(DecrementerPoints());
        setTimeout(() => EnvoiDesCartes(), 1000);
      }
    }
  });
});

function lanceJeu() {
  temps = 61;
  EnvoiDesCartes();
  lancerDecompteTemps();
  boutonLancerJeu.removeEventListener("click", lanceJeu);
}

function lancerDecompteTemps() {
  let interval = setInterval(() => {
    temps = temps - 1;
    endroitTimer.innerText = temps;
    if (temps == 0 || temps < 0) {
      endroitTimer.innerText = "Partie terminée";
      afficherMessageFindePartie(score);
      clearInterval(interval);
      boutonLancerJeu.addEventListener("click", lanceJeu);
      temps = -1;
      score = 0;
      endroitScore.innerText = "score";
    }
  }, 1000);
}

function IncrementerPoints() {
  score += 10;
  return score;
}

function DecrementerPoints() {
  score = score - 10;
  return score;
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
  let tableauChiffres = [0, 1, 2, 3, 4];
  let tableauDelimination = [];
  while (i < nbrCartes) {
    let chiffreHasardFormes = Math.floor(Math.random() * 5);
    let chiffreHasardCouleurs = Math.floor(Math.random() * 5);

    if (
      chiffreHasardFormes != ChiffreHasardEnregistreFormes &&
      chiffreHasardCouleurs != ChiffreHasardEnregistreCouleurs &&
      chiffreHasardCouleurs != ChiffreHasardEnregistreFormes &&
      chiffreHasardFormes != ChiffreHasardEnregistreCouleurs
    ) {
      let carte = new Carte(
        formes[chiffreHasardFormes],
        couleurs[chiffreHasardCouleurs]
      );

      tableauDelimination.push(chiffreHasardCouleurs);
      tableauDelimination.push(chiffreHasardFormes);
      i++;

      if (chiffreHasardFormes == chiffreHasardCouleurs) {
        bonChiffreDesHasard = chiffreHasardFormes;
      } else if (
        ChiffreHasardEnregistreCouleurs == ChiffreHasardEnregistreFormes
      ) {
        bonChiffreDesHasard = ChiffreHasardEnregistreCouleurs;
      } else {
        bonChiffreDesHasard = tableauChiffres.filter(function (item) {
          return tableauDelimination.indexOf(item) == -1;
        });
      }

      ChiffreHasardEnregistreFormes = chiffreHasardFormes;
      ChiffreHasardEnregistreCouleurs = chiffreHasardCouleurs;
    }
  }
}

function messageReussite() {
  let message = document.createElement("p");
  message.innerText = "c'est gagné";
  message.classList.add("messageReussite");
  endroitOuJeu.appendChild(message);
}

function messageDefaite() {
  let message = document.createElement("p");
  message.innerText = "c'est perdu";
  message.classList.add("messagePerdu");
  endroitOuJeu.appendChild(message);
}

function afficherMessageFindePartie(score) {
  let boiteFin = document.createElement("div");
  let messageFin = document.createElement("p");
  messageFin.innerText = `Partie terminée, tu as ${score} points`;
  boiteFin.classList.add("messageFinDePartie");
  messageFin.style.textAlign = "center";
  endroitOuJeu.appendChild(boiteFin);
  boiteFin.appendChild(messageFin);
}
