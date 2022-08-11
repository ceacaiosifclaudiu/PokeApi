import { useOutletContext } from "react-router-dom";
function Stats() {
  const stats = useOutletContext();
  const statesOne = stats.stats;
  return (
    <div className="stats displayFlex">
      <ul>
        {statesOne?.map((stat) => (
          <li key={stat.stat.name}>
            <h4>
              {" "}
              {stat.stat.name}: {stat?.base_stat}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
