import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Characters from "../src/components/Characters";
import FavoriteTeam from "../src/components/FavoriteTeam";
import Search from "../src/components/Search";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MyNav from "./components/MyNav";

function App() {
 const [characters, setCharacters] = useState([]);
 const [favoriteTeam, setFavoriteTeam] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [filterAlignment, setFilterAlignment] = useState("");
 const [filterPublisher, setFilterPublisher] = useState("");
 const [filterFavorites, setFilterFavorites] = useState("");


 useEffect(() => {
   async function fetchCharacters() {
     const response = await axios.get('http://localhost:3000/characters');
     setCharacters(response.data);
   }


   fetchCharacters();
 }, []);


 const addCharacterToFavoriteTeam = (character) => {
   if (!favoriteTeam.find((c) => c._id === character._id)) {
     setFavoriteTeam([...favoriteTeam, character]);
   } else {
     setFavoriteTeam(favoriteTeam.filter((c) => c._id !== character._id));
   }
 };


 const handleSearchChange = (event) => {
   setSearchTerm(event.target.value);
 };


 const handleAlignmentFilterChange = (event) => {
   setFilterAlignment(event.target.value);
 };


 const handlePublisherFilterChange = (event) => {
   setFilterPublisher(event.target.value);
 };


 const handleFavoritesFilterChange = (event) => {
   setFilterFavorites(event.target.value);
 };


 const filterCharacters = (character) => {
   const nameMatch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
   const alignmentMatch = !filterAlignment || filterAlignment === character.biography.alignment;
   const publisherMatch = !filterPublisher || filterPublisher === character.biography.publisher;
   const favoritesMatch = !filterFavorites || favoriteTeam.find((c) => c._id === character._id);
   return nameMatch && alignmentMatch && publisherMatch && favoritesMatch;
 };


 const filteredCharacters = characters.filter(filterCharacters);


 return (
  <div>
  <Header />
   <Container>
     <h1>Superhero Team Builder</h1>
     <Row>
       <Col xs={12} md={8}>
         <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
         <div>
           <label htmlFor="alignment-filter">Filter by alignment:</label>
           <select id="alignment-filter" value={filterAlignment} onChange={handleAlignmentFilterChange}>
             <option value="">All</option>
             <option value="good">Good</option>
             <option value="bad">Bad</option>
             <option value="neutral">Neutral</option>
           </select>
         </div>
         <div>
           <label htmlFor="publisher-filter">Filter by publisher:</label>
           <select id="publisher-filter" value={filterPublisher} onChange={handlePublisherFilterChange}>
             <option value="">All</option>
             <option value="Marvel Comics">Marvel Comics</option>
             <option value="DC Comics">DC Comics</option>
             <option value="Image Comics">Image Comics</option>
             <option value="Dark Horse Comics">Dark Horse Comics</option>
             <option value="IDW Publishing">IDW Publishing</option>
           </select>
         </div>
         <div>
           <label htmlFor="favorites-filter">Filter by favorites:</label>
           <select id="favorites-filter" value={filterFavorites} onChange={handleFavoritesFilterChange}>
             <option value="">All</option>
             <option value="true">Favorites</option>
           </select>
         </div>
         <Characters characters={filteredCharacters} onSelectCharacter={addCharacterToFavoriteTeam} onAddToFavorites={addCharacterToFavoriteTeam} />
       </Col>
       <Col xs={12} md={4}>
       <FavoriteTeam favoriteTeam={favoriteTeam} setFavoriteTeam={setFavoriteTeam} />
     </Col>
     </Row>
   </Container>
   </div>
 );
}


export default App;
