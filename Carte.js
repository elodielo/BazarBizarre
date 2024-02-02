export class Cartes {
    #forme
    #couleur
    
    constructor(forme, couleur){
        this.#forme = forme
        this.#couleur = couleur
    }

    getForme() {
        return this.#forme
    }

    setForme(forme) {
        this.#forme = forme
    } 
    getCouleur() {
        return this.#couleur
    }

    setCouleur(couleur) {
        this.#couleur = couleur
    } 

}