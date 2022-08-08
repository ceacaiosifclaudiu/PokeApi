function Moves({ moves }) {
  return (
    <div className="movesContainer displayFlex flexDirectionColumn">
      <div className="title">
        <h3>Moves</h3>
      </div>
      <div className="moves">
        {moves?.map((move) => (
          <p className="move" key={move.move.name}>
            {move.move.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Moves;
