import React from 'react';
import '../App'

function Characters({ characters, onSelectCharacter, onAddToFavorites }) {
  return (
    <div>
      <h2>Characters</h2>
      {characters && characters.length > 0 ? (
        characters.map((character) => (
          <div className="flip-container" key={character._id}>
            <div className="flipper front">
              {character.images && character.images.sm ? (
                <img src={character.images.sm} alt={character.name} />
              ) : (
                <div>No image available</div>
              )}
              <h2>{character.name}</h2>
              <h3>Powerstats:</h3>
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
            <div className="flipper back">
              <h2>{character.name}</h2>
              <h3>Biography:</h3>
              <ul>
                <li>Full name: {character.biography.fullName}</li>
                <li>Alter egos: {character.biography.alterEgos}</li>
                <li>Aliases: {character.biography.aliases.join(', ')}</li>
                <li>Place of birth: {character.biography.placeOfBirth}</li>
                <li>First appearance: {character.biography.firstAppearance}</li>
                <li>Publisher: {character.biography.publisher}</li>
                <li>Alignment: {character.biography.alignment}</li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div>No characters to display</div>
      )}
    </div>
  );
}

export default Characters;
