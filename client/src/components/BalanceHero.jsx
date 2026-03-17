function BalanceHero({ walletData }) {
  return (
    <div className="panel balance-hero">
      <div className="balance-copy">
        <span className="eyebrow">Available Balance</span>
        <h1>
          {walletData.currencyCode}{" "}
          {walletData.availableBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </h1>
        <p>Monthly growth: +{walletData.monthlyGrowth}%</p>
      </div>

      <div className="balance-badge">
        <div className="pulse-dot" />
        <span>Live wallet status</span>
      </div>
    </div>
  );
}

export default BalanceHero;