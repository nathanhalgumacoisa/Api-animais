import { AnimalList } from "../models/animals/AnimalList.js";
import { Animal } from "../models/animals/Animal.js";

const listaAnimais = new AnimalList

export const chamarAnimais = (req, res) => {
    const animais = listaAnimais.chamarAnimais();

    if(animais.length){
        return res.status(200).json(animais);
    }
    return res.status(404).json({message: "não a animais cadastrados"});
}

export const chamarAnimal = (req, res) => {
    const { id } = req.params;
    const animal = listaAnimais.chamarAnimalPeloId(id);

    if (!animal) res.status(404).json({message: "animal não encontrado"});
        res.status(200).json(animal);
}

export const criarAnimal = (req, res) => {
    const { nome, idade, tipo, cor, status, imagem } = req.body;
    const animal = new Animal(nome, idade, tipo, cor, status, imagem);

    listaAnimais.adicionar(animal);

    return res.status(200).send(animal);
} 

export const editarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, status, imagem  } = req.body;
    const animal = listaAnimais.chamarAnimalPeloId(id);

    if(!animal) res.status(404).send({message: "animal não encontrado"});
    
    listaAnimais.atualizarAnimal(id, nome, idade, tipo, cor, status, imagem);

    return res.send(animal);
}

export const excluirAnimal = (req, res) => {
    const { id } = req.params;
    const animal = listaAnimais.chamarAnimalPeloId(id);

    if(!animal) res.status(404).send({message: "animal não encontrado"});

    listaAnimais.deletarAnimal(id);

    return res.send(animal);
}