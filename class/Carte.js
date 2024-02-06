export class Carte {
    #forme
    #couleur

    constructor(forme, couleur) {
        this.forme = forme;
        this.couleur = couleur;
        this.imageAafficher();
    }

    get forme() {
        return this.#forme;
    }
    
    set forme(forme) {
        this.#forme = forme;
    }

    get couleur() {
        return this.#couleur;
    }

    set couleur(couleur) {
        this.#couleur = couleur
    }


    imageAafficher() {
        let endroitOuJeu = document.getElementById("placeDeJeu");
        let image = document.createElement("img")
        image.src = `./images/${this.forme}-${this.couleur}.png`
        endroitOuJeu.appendChild(image)
        image.classList.add(this.forme, this.couleur)
        }
    }