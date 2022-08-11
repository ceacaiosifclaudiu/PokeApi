import { useOutletContext } from "react-router-dom";
import Photo from "../Photo";
import "./Sprites.css";

function Sprites() {
  const { front_default, front_shiny, back_default, back_shiny } =
    useOutletContext();
  console.log(back_shiny);
  return (
    <div className="sprites">
      <Photo src={front_default} />
      <Photo src={front_shiny} />
      <Photo src={back_default} />
      <Photo src={back_shiny} />
    </div>
  );
}

export default Sprites;
