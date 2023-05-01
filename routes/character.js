import { Router } from "express";
import { getCharacters, getCharacterByName, createCharacter, updateCharacter, deleteCharacter, getByAlignment, getByPublisher, getCharacter } from "../controllers/characters.js";


const router = Router();

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacter);
router.post("/characters", createCharacter);
router.put("/characters/:id", updateCharacter);
router.delete("/characters/:id", deleteCharacter);
router.get("/characters/alignment/:align", getByAlignment);
router.get("/characters/publisher/:pub", getByPublisher);
router.get('/characters/name/:name', getCharacterByName);
// router.get('/powerstat', getCharactersByPowerStat);
export default router;
