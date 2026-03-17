function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <div>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export default SectionTitle;