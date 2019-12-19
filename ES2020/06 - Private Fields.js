/**
 * 
 * Private Fields
 * 
 */

class teste{
    #propriedadePrivada;
    propriedadePublica;

    constructor(){
        this.#propriedadePrivada = "propriedade privada";
        this.propriedadePublica = "propriedade publica";
    }

    get privado(){
        return this.#propriedadePrivada;
    }
};

//  let obj = new teste();
//  obj.propriedadePublica;
//  obj.propriedadePrivada;
//  obj.#propriedadePrivada
//  obj.privado;