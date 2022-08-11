import "./HeightWeightBaseExperience.css";

function HeightWeightBaseExperience({ height, weight, base_experience }) {
  return (
    <div className="details displayFlex">
      <div className="title">
        <h2>Details</h2>
      </div>
      <div>
        <h3 className="detailsDescription">Height: {height}</h3>
        <h3 className="detailsDescription">Weight: {weight}</h3>
        <h3 className="detailsDescription">
          Base Experience: {base_experience}
        </h3>
      </div>
    </div>
  );
}

export default HeightWeightBaseExperience;
