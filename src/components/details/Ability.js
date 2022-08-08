function Ability({ abilities }) {
  return (
    <>
      <div className="abilities displayFlex">
        <div className="title">
          <h3>Abilities</h3>
        </div>

        {abilities.map((powers) => (
          <p key={powers.ability.name}>{powers.ability.name}</p>
        ))}
      </div>
    </>
  );
}

export default Ability;
