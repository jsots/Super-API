import mongoose from 'mongoose';
import connection from './connection.js';
// import fetchSuperheroData from './data.js';
import Superhero from '../models/Superhero.js';
import data from `./superhero.json` assert {type: 'json'};

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/superhero-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // const superheroData = await fetchSuperheroData();
    
    const result = await Superhero.insertMany(superheroData);
    console.log(`${result.length} documents inserted`);

    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error(error);
  }
}

seedDatabase();
