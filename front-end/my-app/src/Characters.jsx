import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteSuperheroes from "./Favorites";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPublisher, setFilterPublisher] = useState("");
  const [filterAlignment, setFilterAlignment] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((response) => {
      setCharacters(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterPublisherChange = (event) => {
    setFilterPublisher(event.target.value);
  };

  const handleFilterAlignmentChange = (event) => {
    setFilterAlignment(event.target.value);
  };

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handleAddToFavorites = (character) => {
    setFavoriteCharacters([...favoriteCharacters, character]);
  };


  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPublisher === "" ||
        character.biography.publisher === filterPublisher) &&
      (filterAlignment === "" ||
        character.biography.alignment === filterAlignment)
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label>
          Filter by publisher:
          <select
            value={filterPublisher}
            onChange={handleFilterPublisherChange}
          >
            <option value="">All publishers</option>
            <option value="Marvel Comics">Marvel Comics</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Dark Horse Comics">Dark Horse Comics</option>
            <option value="Image Comics">Image Comics</option>
          </select>
        </label>
        <label>
          Filter by alignment:
          <select
            value={filterAlignment}
            onChange={handleFilterAlignmentChange}
          >
            <option value="">All alignments</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
      </div>
      <div className="character-container">
        {filteredCharacters.map((character) => (
          <div
            className="character-card"
            key={character.id}
            onClick={() => handleOpenModal(character)}
          >
            <img src={character.images.sm} alt={character.name} />
            <button onClick={() => handleAddToFavorites(character)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Favorite Characters</h2>
        <FavoriteSuperheroes characters={favoriteCharacters} onRemove={handleRemoveFavoriteCharacter} />
      </div>
      {selectedCharacter && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCharacter.name}</h2>
            <img
              src={selectedCharacter.images.md}
              alt={selectedCharacter.name}
            />
            <div>
              <h3>Powerstats</h3>
              <ul>
                <li>
                  Intelligence: {selectedCharacter.powerstats.intelligence}
                </li>
                <li>Strength: {selectedCharacter.powerstats.strength}</li>
                <li>Speed: {selectedCharacter.powerstats.speed}</li>
                <li>Durability: {selectedCharacter.powerstats.durability}</li>
                <li>Power: {selectedCharacter.powerstats.power}</li>
                <li>Combat: {selectedCharacter.powerstats.combat}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Characters;
