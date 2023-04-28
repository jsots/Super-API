import mongoose from 'mongoose';

const { Schema } = mongoose;

const superheroSchema = new Schema({
  // id: { type: Number }, not object id
  name: { type: String },
  slug: { type: String },
  powerstats: {
    intelligence: { type: String },
    strength: { type: String },
    speed: { type: String },
    durability: { type: String },
    power: { type: String },
    combat: { type: String },
  },
  appearance: {
    gender: { type: String },
    race: { type: String },
    height: [{ type: String }],
    weight: [{ type: String }],
    eyeColor: { type: String },
    hairColor: { type: String },
  },
  biography: {
    fullName: { type: String },
    alterEgos: { type: String },
    aliases: [{ type: String }],
    placeOfBirth: { type: String },
    firstAppearance: { type: String },
    publisher: { type: String },
    alignment: { type: String },
  },
  work: {
    occupation: { type: String },
    base: { type: String },
  },
  connections: {
    groupAffiliation: { type: String },
    relatives: { type: String },
  },
  images: {
    xs: { type: String },
    sm: { type: String },
    md: { type: String },
    lg: { type: String },
  },
});

const Superhero = mongoose.model('Superhero', superheroSchema);

export default Superhero;


