import express from 'express';
import Superhero from '../models/Superhero.js';


const router = express.Router();

// GET all superheroes
export async function getSuperheros(req, res) {
  try {
    const superheroes = await Superhero.find({});
    res.json(superheroes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// GET superhero by name
export async function getSuperheroByName(req, res) {
  try {
    const superhero = await Superhero.findOne({ name: req.params.name });
    if (!superhero) {
      res.status(404).json({ message: 'Superhero not found' });
    } else {
      res.json(superhero);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// GET superhero by ID
export async function getSuperhero(req, res) {
  try {
    const superhero = await Superhero.findById(req.params.id);
    if (!superhero) {
      res.status(404).json({ message: 'Superhero not found' });
    } else {
      res.json(superhero);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// POST a new superhero
export async function createSuperhero(req, res) {
  try {
    const superhero = new Superhero(req.body);
    await superhero.save();
    res.status(201).json(superhero);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// PUT update superhero by ID
export async function updateSuperhero(req, res) {
  try {
    const superhero = await Superhero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!superhero) {
      res.status(404).json({ message: 'Superhero not found' });
    } else {
      res.json(superhero);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// DELETE superhero by ID
export async function deleteSuperhero(req, res) {
  try {
    const superhero = await Superhero.findByIdAndDelete(req.params.id);
    if (!superhero) {
      res.status(404).json({ message: 'Superhero not found' });
    } else {
      res.json({ message: 'Superhero deleted successfully' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// GET superheroes by alignment good bad or neutral
export async function getByAlignment(req, res) {
  try {
    const alignment = req.params.align;
    if (alignment !== "good" && alignment !== "bad" && alignment !== "neutral") {
      return res.status(400).json({ message: "Invalid alignment" });
    }
    const superheroes = await Superhero.find({ "biography.alignment": alignment });
    res.json(superheroes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

// GET superheroes by publisher
export async function getByPublisher(req, res) {
  try {
    const superheroes = await Superhero.find({ "biography.publisher": req.params.pub });
    res.json(superheroes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export default router;
