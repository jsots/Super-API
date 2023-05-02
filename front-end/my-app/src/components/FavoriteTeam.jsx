import React from "react";

function FavoriteTeam(props) {
  const { favoriteTeam, setFavoriteTeam } = props;
  
  const isFavorite = (character) => {
    if (favoriteTeam && favoriteTeam.length > 0) {
      return favoriteTeam.find((c) => c._id === character._id);
    } else {
      return false;
    }
  };
  

  const handleRemoveCharacter = (character) => {
    setFavoriteTeam(favoriteTeam.filter((c) => c._id !== character._id));
  };
 
 
  return (
    <div>
      <h2>Favorite Team</h2>
      {favoriteTeam && favoriteTeam.length > 0 ? (
        favoriteTeam.map((character) => (
          <div key={character._id}>
            <img src={character.images.sm} alt={character.name} />
            <div>{character.name}</div>
            <button onClick={() => handleRemoveCharacter(character)}>Remove</button>
          </div>
        ))
      ) : (
        <div>No characters to display</div>
      )}
    </div>
  );
 }
 
 
 export default FavoriteTeam;
 