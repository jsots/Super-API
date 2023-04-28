import mongoose from 'mongoose';
import Superhero from '../models/Superhero.js';
import superheroesData from "./superheroes.json" assert { type: 'json' }
import connection from '../connection/connection.js';
import { skipUndefinedProperties } from '../utils/skipUndefinedProperties.js';

connection.once('open', async () => {
  try {
    const superheroInstances = superheroesData.map(superheroData => {
      const superhero = new Superhero(skipUndefinedProperties({
        name: superheroData.name,
        powerstats: superheroData.powerstats,
        appearance: superheroData.appearance,
        biography: superheroData.biography,
        work: superheroData.work,
        connections: superheroData.connections,
        images: superheroData.images,
      }));
      
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