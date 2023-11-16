import { Router } from "express";
import { chamarAnimais, chamarAnimal } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", chamarAnimais);
animalRouter.get("/:id", chamarAnimal);

export default animalRouter