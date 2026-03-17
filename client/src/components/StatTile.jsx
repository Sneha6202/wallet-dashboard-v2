function StatTile({ label, value, helper, variant = "default" }) {
  return (
    <div className={`panel stat-tile ${variant}`}>
      <span>{label}</span>
      <h4>{value}</h4>
      <p>{helper}</p>
    </div>
  );
}

export default StatTile;