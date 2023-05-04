import mongoose from 'mongoose';
import Character from '../models/Character.js';
import User from '../models/User.js';
import charactersData from "./characters.json" assert { type: 'json' };
import connection from '../connection/connection.js';
import { skipUndefinedProperties } from '../utils/skipUndefinedProperties.js';
import bcrypt from 'bcrypt';

connection.once('open', async () => {
  try {
    const characterInstances = charactersData.map((characterData) => {
      const character = new Character(
        skipUndefinedProperties({
          name: characterData.name,
          powerstats: characterData.powerstats,
          appearance: characterData.appearance,
          biography: characterData.biography,
          work: characterData.work,
          connections: characterData.connections,
          images: characterData.images,
        })
      );

      return character;
    });
    await User.deleteMany();

    const testUser = new User({
      username: 'testuser',
      email: 'testuser@gmail.com',
      password_digest: await bcrypt.hash('testpassword', 11)
    });

    await testUser.save()


    await Character.deleteMany();
    await Character.create(characterInstances);

  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
});
