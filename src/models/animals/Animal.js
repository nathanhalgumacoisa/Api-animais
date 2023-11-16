import { v4 as uuidv4 } from "uuid";

export class Animal{
    constructor(nome, idade, tipo, cor, status, imagem){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.cor = cor;
        this.status = status;
        this.imagem = imagem
        this.id = this.gerarId
    }

    gerarId(){
        return uuidv4
    }
}