import { db } from "../data/db.js";

export const addBank = (req, res) => {
  const { label, amount, meta } = req.body;

  if (!label || !amount) {
    return res.status(400).json({
      ok: false,
      message: "Bank name and amount are required"
    });
  }

  const newBank = {
    id: Date.now(),
    label,
    amount: Number(amount),
    meta: meta || "Recently added"
  };

  db.linkedBanks.push(newBank);

  return res.status(201).json({
    ok: true,
    message: "Bank account created",
    payload: newBank
  });
};