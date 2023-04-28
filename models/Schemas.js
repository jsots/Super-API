//tbd 


const superheroSchema = new Schema({
  name: { type: String },
  powerstats: { type: Schema.Types.ObjectId, ref: 'Powerstats' },
  appearance: { type: Schema.Types.ObjectId, ref: 'Appearance' },
  biography: { type: Schema.Types.ObjectId, ref: 'Biography' },
  work: {
    occupation: { type: String },
    base: { type: String },
  },
  connections: {
    relatives: { type: String },
  },
  images: { type: Schema.Types.ObjectId, ref: 'Images' },
  isVillain: {
    type: Boolean,
    default: function() {
      return this.biography.alignment === 'bad';
    }
  }
});

const powerstatsSchema = new Schema({
  intelligence: { type: String },
  strength: { type: String },
  speed: { type: String },
  durability: { type: String },
  power: { type: String },
  combat: { type: String },
});

const Powerstats = mongoose.model('Powerstats', powerstatsSchema);

export default Powerstats;


const appearanceSchema = new Schema({
  gender: { type: String },
  race: { type: String },
  height: [{ type: String }],
  weight: [{ type: String }],
  eyeColor: { type: String },
  hairColor: { type: String },
});


const biographySchema = new Schema({
  fullName: { type: String },
  alterEgos: { type: String },
  aliases: [{ type: String }],
  placeOfBirth: { type: String },
  firstAppearance: { type: String },
  publisher: { type: String },
  alignment: { type: String },
});

const workSchema = new Schema({
  occupation: { type: String },
  base: { type: String },
});

const connectionsSchema = new Schema({
  groupAffiliation: { type: String },
  relatives: { type: String },
});

const imagesSchema = new Schema({
  xs: { type: String },
  sm: { type: String },
  md: { type: String },
  lg: { type: String }
});


import Superhero from '../models/Superhero.js';
import Powerstats from '../models/Powerstats.js';
import Appearance from '../models/Appearance.js';
import Biography from '../models/Biography.js';
import Images from '../models/Images.js';

export async function getSuperheroes(req, res) {
  try {
    const superheroes = await Superhero.find()
      .populate('powerstats')
      .populate('appearance')
      .populate('biography')
      .populate('images');

    res.json(superheroes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

