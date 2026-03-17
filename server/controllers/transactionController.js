import { db } from "../data/db.js";

const formatDate = () =>
  new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short"
  });

const normalizeCurrency = (value = "USD") => {
  const code = String(value).trim().toUpperCase();
  return code === "RS" ? "INR" : code || "USD";
};

const addTrendPoint = () => {
  db.walletData.trend.push({
    label: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit" }),
    value: Math.floor(Math.random() * 20) + 15
  });

  if (db.walletData.trend.length > 12) {
    db.walletData.trend.shift();
  }
};

export const addMoney = (req, res) => {
  const { amount, currency = "USD", title = "Wallet Credit" } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({
      ok: false,
      message: "Amount should be greater than 0"
    });
  }

  const numericAmount = Number(amount);

  db.walletData.availableBalance += numericAmount;
  db.walletData.totalIncome += numericAmount;

  db.activityLog.unshift({
    id: Date.now(),
    category: "credit",
    title,
    amount: numericAmount,
    currency: normalizeCurrency(currency),
    timestamp: formatDate(),
    state: "Completed"
  });

  addTrendPoint();

  return res.json({
    ok: true,
    message: "Money added successfully"
  });
};

export const cashOut = (req, res) => {
  const { amount, currency = "USD", title = "Wallet Debit" } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({
      ok: false,
      message: "Amount should be greater than 0"
    });
  }

  const numericAmount = Number(amount);

  if (numericAmount > db.walletData.availableBalance) {
    return res.status(400).json({
      ok: false,
      message: "Insufficient balance"
    });
  }

  db.walletData.availableBalance -= numericAmount;
  db.walletData.totalExpense += numericAmount;

  db.activityLog.unshift({
    id: Date.now(),
    category: "debit",
    title,
    amount: numericAmount,
    currency: normalizeCurrency(currency),
    timestamp: formatDate(),
    state: "Completed"
  });

  addTrendPoint();

  return res.json({
    ok: true,
    message: "Money withdrawn successfully"
  });
};

export const getActivity = (req, res) => {
  const { type = "all", search = "" } = req.query;

  let result = [...db.activityLog];

  if (type !== "all") {
    result = result.filter((item) => item.category === type);
  }

  if (search.trim()) {
    const query = search.trim().toLowerCase();
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.currency.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query)
    );
  }

  res.json({
    ok: true,
    payload: result
  });
};

export const deleteActivity = (req, res) => {
  const targetId = Number(req.params.id);
  const index = db.activityLog.findIndex((item) => item.id === targetId);

  if (index === -1) {
    return res.status(404).json({
      ok: false,
      message: "Transaction not found"
    });
  }

  db.activityLog.splice(index, 1);

  res.json({
    ok: true,
    message: "Transaction removed"
  });
};