import fetch from 'node-fetch';
import {promises} from 'fs';


async function fetchSuperheroData() {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    const data = await response.json();
    console.log(`${data.length} superhero documents fetched`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchSuperheroData;