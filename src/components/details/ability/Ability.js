import "./Ability.css";
import { useOutletContext } from "react-router-dom";

function Ability() {
  const abilities = useOutletContext();
  const abilitiesOne = abilities.abilities;
  return (
    <>
      <div className="abilities">
        {abilitiesOne.map((powers) => (
          <h4 key={powers.ability.name}>{powers.ability.name}</h4>
        ))}
      </div>
    </>
  );
}

export default Ability;
