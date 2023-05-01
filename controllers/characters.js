
import express from 'express';
import Character from '../models/Character.js';


const router = express.Router();

// GET all characters
export async function getCharacters(req, res) {
 try {
   const characters = await Character.find({});
   res.json(characters);
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// GET character by name
export async function getCharacterByName(req, res) {
 try {
   const character = await Character.findOne({ name: req.params.name });
   if (!character) {
     res.status(404).json({ message: 'Character not found' });
   } else {
     res.json(character);
   }
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// GET character by ID
export async function getCharacter(req, res) {
 try {
   const character = await Character.findById(req.params.id);
   if (!character) {
     res.status(404).json({ message: 'Character not found' });
   } else {
     res.json(character);
   }
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// POST a new character
export async function createCharacter(req, res) {
 try {
   const character = new Character(req.body);
   await character.save();
   res.status(201).json(character);
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// PUT update character by ID
export async function updateCharacter(req, res) {
 try {
   const character = await Character.findByIdAndUpdate(
     req.params.id,
     req.body,
     { new: true }
   );
   if (!character) {
     res.status(404).json({ message: 'Character not found' });
   } else {
     res.json(character);
   }
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// DELETE character by ID
export async function deleteCharacter(req, res) {
 try {
   const character = await Character.findByIdAndDelete(req.params.id);
   if (!character) {
     res.status(404).json({ message: 'Character not found' });
   } else {
     res.json({ message: 'Character deleted successfully' });
   }
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// GET characters by alignment good bad or neutral
export async function getByAlignment(req, res) {
 try {
   const alignment = req.params.align;
   if (alignment !== "good" && alignment !== "bad" && alignment !== "neutral") {
     return res.status(400).json({ message: "Invalid alignment" });
   }
   const characters = await Character.find({ "biography.alignment": alignment });
   res.json(characters);
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

// GET characters by publisher
export async function getByPublisher(req, res) {
 try {
   const characters = await Character.find({ "biography.publisher": req.params.pub });
   res.json(characters);
 } catch (err) {
   console.log(err);
   res.status(500).json({ message: 'Server error' });
 }
}

export default router;