import React, { useState, useEffect } from "react";
import axios from "axios";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPublisher, setFilterPublisher] = useState("");
  const [filterAlignment, setFilterAlignment] = useState("");

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

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPublisher === "" || character.biography.publisher === filterPublisher) &&
      (filterAlignment === "" || character.biography.alignment === filterAlignment)
    );
  });

  return (
    <div>
      <div>
        <input type="text" placeholder="Search characters..." value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div>
        <label>
          Filter by publisher:
          <select value={filterPublisher} onChange={handleFilterPublisherChange}>
            <option value="">All publishers</option>
            <option value="Marvel Comics">Marvel Comics</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Dark Horse Comics">Dark Horse Comics</option>
            <option value="Image Comics">Image Comics</option>
          </select>
        </label>
        <label>
          Filter by alignment:
          <select value={filterAlignment} onChange={handleFilterAlignmentChange}>
            <option value="">All alignments</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
      </div>
      <div>
        {filteredCharacters.map((character) => (
          <div key={character.id} onClick={() => alert(JSON.stringify(character.powerstats))}>
            <img src={character.images.sm} alt={character.name} />
            <div>{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
