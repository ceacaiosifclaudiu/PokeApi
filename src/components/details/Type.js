import "./Type.css";

function Type({ singlePokemon }) {
  return (
    <div className="pokemonCardTypes">
      <div className="pokemonTypeCard">
        {singlePokemon.types.map(({ type: { name } }) => (
          <h2 className={`${name}  pokemonType`}>{name}</h2>
        ))}
      </div>
    </div>
  );
}

export default Type;
