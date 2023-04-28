import { Router } from "express";
import { getSuperheros, getSuperhero, createSuperhero, updateSuperhero, deleteSuperhero } from "../controllers/superheros.js";


const router = Router();

router.get("/", getSuperheros);
router.get("/:id", getSuperhero);
router.post("/", createSuperhero);
router.put("/:id", updateSuperhero);
router.delete("/:id", deleteSuperhero);



export default router;