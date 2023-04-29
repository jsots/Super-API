import { Router } from "express";
import { getSuperheroes, getSuperheroByName, createSuperhero, updateSuperhero, deleteSuperhero, getByAlignment, getByPublisher, getSuperhero } from "../controllers/superheroes.js";


const router = Router();

router.get("/", getSuperheroes);
router.get("/:id", getSuperhero);
router.post("/", createSuperhero);
router.put("/:id", updateSuperhero);
router.delete("/:id", deleteSuperhero);
router.get("/alignment/:align", getByAlignment);
router.get("/publisher/:pub", getByPublisher);
router.get('/name/:name', getSuperheroByName);

export default router;