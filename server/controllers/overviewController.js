import { db } from "../data/db.js";

export const getOverview = (req, res) => {
  res.json({
    ok: true,
    payload: {
      profile: db.profile,
      walletData: db.walletData,
      linkedBanks: db.linkedBanks,
      vaults: db.vaults,
      activityLog: db.activityLog
    }
  });
};