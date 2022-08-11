import { useOutletContext } from "react-router-dom";

function Moves() {
  const moves = useOutletContext();
  const movesAll = moves.moves;
  return (
    <div className="movesContainer displayFlex flexDirectionColumn">
      <div className="moves">
        {movesAll?.map((move) => (
          <h4 className="move" key={move.move.name}>
            {move.move.name}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default Moves;
