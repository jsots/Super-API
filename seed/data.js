import mongoose from 'mongoose';
import Character from '../models/Character.js';
import User from '../models/User.js';
import charactersData from "./characters.json" assert { type: 'json' };
import connection from '../connection/connection.js';
import { skipUndefinedProperties } from '../utils/skipUndefinedProperties.js';
import bcrypt from 'bcrypt';

connection.once("open", async () => {
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

    const usersData = {
      username: "test",
      email: "test@gmail.com",
      password: "test",
    };

    const hashedPassword = await bcrypt.hash(usersData.password, 10);

    const userInstance = new User(
      skipUndefinedProperties({
        username: usersData.username,
        email: usersData.email,
        password_digest: hashedPassword,
      })
    );

    await Character.deleteMany();
    await Character.create(characterInstances);

    await User.deleteMany();
    await User.create(userInstance);

    console.log("Characters and user saved successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
});
