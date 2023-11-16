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
        res.status(200).json(animal)
}
