import React, { useRef } from "react";

function Characters({ characters, onSelectCharacter, onAddToFavorites, favoriteTeam }) {
  const isFavorite = (character) => {
    return favoriteTeam && favoriteTeam.find((c) => c._id === character._id);
  }
  const charactersRef = useRef(null);

  const handleAddToTeam = (character) => {
    onSelectCharacter(character);
    charactersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToFavorites = (character) => {
    onAddToFavorites(character);
  };

  return (
    <div>
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
            <button onClick={() => handleAddToTeam(character)}>Add to team</button>
            <button onClick={() => handleAddToFavorites(character)} disabled={isFavorite(character)}>Favorite</button>
          </div>
        ))
      ) : (
        <div>No characters to display</div>
      )}
      <div ref={charactersRef}></div>
    </div>
  );
}

export default Characters;
