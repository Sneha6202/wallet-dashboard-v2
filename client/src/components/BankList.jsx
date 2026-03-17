function BankList({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div className="panel mini-card bank-card" key={item.id}>
          <span>{item.label}</span>
          <h4>{item.amount.toLocaleString()}</h4>
          <p>{item.meta}</p>
        </div>
      ))}
    </div>
  );
}

export default BankList;