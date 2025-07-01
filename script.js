class Heroi {
    constructor(nome ,idade , tipo ){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque() {
        if(this.tipo == "mago"){
            return "magia"
        }else if(this.tipo == "guerreiro"){
            return "espada"
        }else if(this.tipo == "monge"){
            return "artes marciais"
        }else if(this.tipo == "ninja"){
            return "shuriken"
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}`)
    }
}    

let golpe = new Heroi("Sakura", 33, "ninja")
golpe.atacar()






