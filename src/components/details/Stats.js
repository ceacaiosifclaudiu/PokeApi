function Stats({ stats }) {
  return (
    <div className="stats displayFlex">
      <div className="title">
        <h3>Stats</h3>
      </div>
      <ul>
        {stats?.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat?.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
