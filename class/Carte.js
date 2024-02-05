export class Cartes {
    couleur
        
    constructor(couleur){
        // this.#forme = forme
        this.couleur = couleur
    }
    
    // getForme() {
    //     return this.#forme
    // }

    // setForme(forme) {
    //     this.#forme = forme
    // } 
    
    getCouleur() {
        return this.couleur
    }
    
    setCouleur(couleur) {
        this.couleur = couleur
    } 
    
    // creerCarte(){
    //     const tableauCouleur = ["blanc", "gris", "rouge" ,"vert", "bleu"];
    //     const tableauForme = ["fantome", "sucette", "montagne", "crabe", "livre"];
    //     for (let i=0; i<tableauCouleur[i].length; i++){
    //         let chiffreHasard = Math.floor(Math.random()*tableauCouleur[i].length)
    //         let Carte = [];
    //         Carte.push(tableauCouleur[chiffreHasard], tableauForme[chiffreHasard])
    //         console.log(Carte);
    //     }
    // }
    
}