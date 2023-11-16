import { Router } from "express";
import { chamarAnimais, chamarAnimal, criarAnimal } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", chamarAnimais);
animalRouter.get("/:id", chamarAnimal);
animalRouter.post("/", criarAnimal);

export default animalRouter