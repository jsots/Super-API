import mongoose from 'mongoose';
import Character from '../models/Character.js';
import charactersData from "./characters.json" assert { type: 'json' }
import connection from '../connection/connection.js';
import { skipUndefinedProperties } from '../utils/skipUndefinedProperties.js';

connection.once('open', async () => {
 try {
   const characterInstances = charactersData.map(characterData => {
     const character = new Character(skipUndefinedProperties({
       name: characterData.name,
       powerstats: characterData.powerstats,
       appearance: characterData.appearance,
       biography: characterData.biography,
       work: characterData.work,
       connections: characterData.connections,
       images: characterData.images,
     }));
    
     return character;
   });

   await Character.deleteMany();
   await Character.create(characterInstances);
   console.log('Characters saved successfully!');
 } catch (error) {
   console.error(error);
 } finally {
   mongoose.disconnect();
 }
});