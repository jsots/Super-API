import { Router } from "express";
import { getSuperheros, getSuperhero, createSuperhero, updateSuperhero, deleteSuperhero, getByAlignment, getByPublisher } from "../controllers/superheros.js";


const router = Router();

router.get("/", getSuperheros);
router.post("/", createSuperhero);
router.put("/:id", updateSuperhero);
router.delete("/:id", deleteSuperhero);
router.get("/alignment/:align", getByAlignment);
router.get("/publisher/:pub", getByPublisher);
router.get("/name/:name", getSuperhero);


export default router;