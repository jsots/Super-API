
function FavoriteSuperheroes(props) {
  const { superheroes, onRemove } = props;

  return (
    <div>
      {superheroes.map((superhero) => (
        <div className="favorite-card" key={superhero.id}>
          <img src={superhero.images.sm} alt={superhero.name} />
          <button onClick={() => onRemove(superhero.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteSuperheroes;