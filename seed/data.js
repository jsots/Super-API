import mongoose from 'mongoose';
import Superhero from '../models/Superhero.js';
import superheroesData from "./superheroes.json" assert { type: 'json' }
import connection from '../connection/connection.js';


connection.once('open', async () => {
  try {
    const superheroInstances = superheroesData.map(superheroData => {
      const isVillain = superheroData.biography.alignment === "bad";
      const superhero = new Superhero({
        name: superheroData.name,
        slug: superheroData.slug,
        powerstats: superheroData.powerstats,
        appearance: superheroData.appearance,
        biography: superheroData.biography,
        work: superheroData.work,
        connections: superheroData.connections,
        images: superheroData.images,
        isVillain: isVillain // new field added to the object
      });

      return superhero;
    });

    await Superhero.deleteMany();
    await Superhero.create(superheroInstances);
    console.log('Superheroes saved successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
});