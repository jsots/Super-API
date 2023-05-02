import React from 'react';
import CharacterCard from './CharacterCard';

function Characters(props) {
 const { characters, onSelectCharacter, onAddToFavorites } = props;

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
