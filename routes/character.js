

import { Router } from "express";
import { getCharacters, getCharacterByName, createCharacter, updateCharacter, deleteCharacter, getByAlignment, getByPublisher, getCharacter } from "../controllers/characters.js";


const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharacter);
router.post("/", createCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);
router.get("/alignment/:align", getByAlignment);
router.get("/publisher/:pub", getByPublisher);
router.get('/name/:name', getCharacterByName);
// router.get('/powerstat', getCharactersByPowerStat);
export default router;
