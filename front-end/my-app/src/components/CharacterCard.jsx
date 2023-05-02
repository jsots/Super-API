import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";


const CharacterCard = ({ character, onAddToFavoriteTeam, onRemoveFromFavorites }) => {
 const [isFavorite, setIsFavorite] = useState(false);


 const toggleFavorite = () => {
   if (isFavorite) {
     setIsFavorite(false);
     onRemoveFromFavorites(character);
   } else {
     setIsFavorite(true);
     onAddToFavoriteTeam(character);
   }
 };


 return (
   <Card className="character-card">
     <Card.Img variant="top" src={character.images.sm} />
     <Card.Body>
       <Card.Title>{character.name}</Card.Title>
       <Button variant={isFavorite ? "danger" : "primary"} onClick={toggleFavorite}>
         {isFavorite ? "Remove from Favorite Team" : "Add to Favorite Team"}
       </Button>
     </Card.Body>
   </Card>
 );
};


export default CharacterCard;
