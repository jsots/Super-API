

import React from "react";


function Search({ searchTerm, handleSearchChange }) {
 return (
   <div>
     <input
       type="text"
       placeholder="Search characters..."
       value={searchTerm}
       onChange={handleSearchChange}
     />
   </div>
 );
}


export default Search;


