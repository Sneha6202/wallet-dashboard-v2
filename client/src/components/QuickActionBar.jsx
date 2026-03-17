function QuickActionBar({ onAddMoney, onCashOut, onAddBank }) {
  return (
    <div className="action-row">
      <button className="primary-btn" onClick={onAddMoney}>
        Add Money
      </button>
      <button className="ghost-btn" onClick={onCashOut}>
        Cash Out
      </button>
      <button className="ghost-btn" onClick={onAddBank}>
        Link Bank
      </button>
    </div>
  );
}

export default QuickActionBar;