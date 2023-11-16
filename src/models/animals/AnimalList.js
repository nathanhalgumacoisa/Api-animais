export class AnimalList {
    constructor(){
        this.listaAnimal = [];
    }

    chamarAnimais(){
        return this.listaAnimal
    }

    chamarAnimalPeloId(id){
        return this.listaAnimal.find((animal) => animal.id === id);
    }

    adicionar(){
        this.listaAnimal.push(animal);
    }

    atualizarAnimal(id, nome, idade, tipo, cor, status, imagem){
        const animal = this.chamarAnimalPeloId(id);

        if(animal){
            animal.nome = nome;
            animal.idade = idade;
            animal.tipo = tipo;
            animal.cor = cor;
            animal.status = status;
            animal.imagem = imagem;
     }

        return animal
    }

    deletarAnimal(id){
        this.listaAnimal = this.listaAnimal.filter((animal) => animal.id !== id);
    }
    
}