function ActivityPanel({
  items,
  filterValue,
  searchValue,
  onFilterChange,
  onSearchChange,
  onDelete
}) {
  return (
    <div className="panel activity-panel">
      <div className="panel-head activity-head">
        <div>
          <h3>Activity Feed</h3>
          <p>Search, filter and manage recent wallet actions</p>
        </div>

        <div className="activity-tools">
          <select value={filterValue} onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">All</option>
            <option value="credit">Credits</option>
            <option value="debit">Debits</option>
          </select>

          <input
            type="text"
            placeholder="Search activity"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="activity-list">
        {items.length === 0 ? (
          <div className="empty-state">No matching activity found.</div>
        ) : (
          items.map((item) => (
            <div className="activity-item" key={item.id}>
              <div className="activity-left">
                <span className="activity-title">{item.title}</span>
                <h4>
                  {item.category === "debit" ? "-" : "+"}
                  {item.amount.toLocaleString()} {item.currency}
                </h4>
                <p>{item.timestamp}</p>
              </div>

              <div className="activity-right">
                <span className={`state-pill ${item.state.toLowerCase()}`}>
                  {item.state}
                </span>
                <button className="delete-btn" onClick={() => onDelete(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActivityPanel;