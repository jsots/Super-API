import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Characters from "../src/components/Characters";
import FavoriteTeam from "../src/components/FavoriteTeam";
import Search from "../src/components/Search";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Filters, { filterCharacters } from "./components/Filters";


function App() {
 const [characters, setCharacters] = useState([]);
 const [favoriteTeam, setFavoriteTeam] = useState([]);
 const [filters, setFilters] = useState({
   searchTerm: "",
   alignment: "",
   publisher: "",
 });
 const [loggedIn, setLoggedIn] = useState(false);
 const favoriteTeamRef = useRef(null);

 const addCharacterToFavoriteTeam = (character) => {
   if (!favoriteTeam.find((c) => c._id === character._id)) {
     setFavoriteTeam([...favoriteTeam, character]);
   } else {
     setFavoriteTeam(favoriteTeam.filter((c) => c._id !== character._id));
   }
   if (favoriteTeamRef.current) {
     favoriteTeamRef.current.scrollIntoView({ behavior: "smooth" });
   }
 };

 useEffect(() => {
   async function fetchCharacters() {
     const response = await axios.get("http://localhost:3000/characters");
     setCharacters(response.data);
   }
   fetchCharacters();
 }, []);

 const handleFilterChange = (key) => (event) => {
   setFilters({ ...filters, [key]: event.target.value });
 };

 const filteredCharacters = characters.filter((character) =>
   filterCharacters(character, { ...filters, favoriteTeam })
 );

 return (
   <div>
     {loggedIn ? <Header /> : <Login setLoggedIn={setLoggedIn} />}
     <Container>
       <h1>Superhero Team Builder</h1>
       <Row>
         <Col xs={12} md={8}>
           <Search
             searchTerm={filters.searchTerm}
             handleSearchChange={handleFilterChange("searchTerm")}
           />
           <Filters
             filters={filters}
             handleFilterChange={handleFilterChange}
           />
           <Characters
             characters={filteredCharacters}
             onSelectCharacter={addCharacterToFavoriteTeam}
             onAddToFavorites={addCharacterToFavoriteTeam}
             favoriteTeamRef={favoriteTeamRef}
           />
         </Col>
         <Col xs={12} md={4}>
           <FavoriteTeam
             favoriteTeam={favoriteTeam}
             setFavoriteTeam={setFavoriteTeam}
           />
         </Col>
       </Row>
     </Container>
   </div>
 );
}

export default App;
