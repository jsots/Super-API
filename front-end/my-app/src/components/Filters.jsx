import React from "react";

function filterCharacters(character, filters) {
  const nameMatch = character.name
    .toLowerCase()
    .includes(filters.searchTerm.toLowerCase());
  const alignmentMatch =
    !filters.alignment || filters.alignment === character.biography.alignment;
  const publisherMatch =
    !filters.publisher || filters.publisher === character.biography.publisher;
  const favoritesMatch =
    !filters.favorites || filters.favorites === "true" || (filters.favorites === "false" && filters.favoriteTeam.some((c) => c._id === character._id));
  return nameMatch && alignmentMatch && publisherMatch && favoritesMatch;
}

function Filters(props) {
  const {
    filters,
    handleFilterChange,
  } = props;

  return (
    <div>
      <label htmlFor="search-term">Search:</label>
      <input type="text" id="search-term" value={filters.searchTerm} onChange={handleFilterChange("searchTerm")} />

      <div>
        <label htmlFor="alignment-filter">Filter by alignment:</label>
        <select
          id="alignment-filter"
          value={filters.alignment}
          onChange={handleFilterChange("alignment")}
        >
          <option value="">All</option>
          <option value="good">Good</option>
          <option value="bad">Bad</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <div>
        <label htmlFor="publisher-filter">Filter by publisher:</label>
        <select
          id="publisher-filter"
          value={filters.publisher}
          onChange={handleFilterChange("publisher")}
        >
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
        <select
          id="favorites-filter"
          value={filters.favorites}
          onChange={handleFilterChange("favorites")}
        >
          <option value="">All</option>
          <option value="true">Favorites</option>
        </select>
      </div>
    </div>
  );
}

export { filterCharacters };
export default Filters;
