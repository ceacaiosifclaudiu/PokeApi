function HeightWeightBaseExperience({ height, weight, base_experience }) {
  return (
    <div className="details displayFlex">
      <div className="title">
        <h3>Details</h3>
      </div>
      <div>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
}

export default HeightWeightBaseExperience;
