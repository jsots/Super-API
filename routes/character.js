import { Router } from "express";
import { getCharacters, getCharacterByName, createCharacter, updateCharacter, deleteCharacter, getByAlignment, getByPublisher, getCharacter } from "../controllers/characters.js";


const router = Router();

router.get("/characters", getCharacters);
router.get("/character/:id", getCharacter);
router.post("/character", createCharacter);
router.put("/character/:id", updateCharacter);
router.delete("/character/:id", deleteCharacter);
router.get("/character/alignment/:align", getByAlignment);
router.get("/character/publisher/:pub", getByPublisher);
router.get('/character/name/:name', getCharacterByName);
// router.get('/powerstat', getCharactersByPowerStat);
export default router;
