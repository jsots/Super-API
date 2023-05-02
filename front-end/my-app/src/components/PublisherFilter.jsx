

import React from 'react';


function PublisherFilter({ characters, onUpdateCharacters }) {
 const handleFilter = (publisher) => {
   const filteredCharacters = characters.filter((character) => character.biography.publisher === publisher);
   onUpdateCharacters(filteredCharacters);
 };


 return (
   <div>
     <button onClick={() => handleFilter('Marvel Comics')}>Marvel</button>
     <button onClick={() => handleFilter('DC Comics')}>DC</button>
     <button onClick={() => handleFilter('Image Comics')}>Image</button>
   </div>
 );
}


export default PublisherFilter;


