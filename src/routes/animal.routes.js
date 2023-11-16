import { Router } from "express";
import { chamarAnimais, chamarAnimal, criarAnimal, editarAnimal, excluirAnimal } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", chamarAnimais);
animalRouter.get("/:id", chamarAnimal);
animalRouter.post("/", criarAnimal);
animalRouter.put("/:id", editarAnimal);
animalRouter.delete("/:id", excluirAnimal);

export default animalRouter