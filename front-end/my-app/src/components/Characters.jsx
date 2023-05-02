import React from 'react';

function Characters({ characters, onSelectCharacter, onAddToFavorites }) {
  return (
    <div>
      <h2>Characters</h2>
      {characters && characters.length > 0 ? (
        characters.map((character) => (
          <div className="character-card" key={character._id}>
            {character.images && character.images.sm ? (
              <img src={character.images.sm} alt={character.name} />
            ) : (
              <div>No image available</div>
            )}
            <div>{character.name}</div>
            <div>Powerstats:</div>
            <ul>
              <li>Intelligence: {character.powerstats.intelligence}</li>
              <li>Strength: {character.powerstats.strength}</li>
              <li>Speed: {character.powerstats.speed}</li>
              <li>Durability: {character.powerstats.durability}</li>
              <li>Power: {character.powerstats.power}</li>
              <li>Combat: {character.powerstats.combat}</li>
            </ul>
            <button onClick={() => onSelectCharacter(character)}>Add to team</button>
            <button onClick={() => onAddToFavorites(character)}>Favorite</button>
          </div>
        ))
      ) : (
        <div>No characters to display</div>
      )}
    </div>
  );
}

export default Characters;

