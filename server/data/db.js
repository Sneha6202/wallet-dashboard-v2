export const db = {
  profile: {
    name: "Mic Smith",
    role: "Wallet Owner"
  },

  walletData: {
    availableBalance: 61240.55,
    currencyCode: "USD",
    monthlyGrowth: 14.8,
    totalIncome: 18450,
    totalExpense: 7620,
    trend: [
      { label: "Apr 08", value: 14 },
      { label: "Apr 16", value: 18 },
      { label: "Apr 24", value: 17 },
      { label: "May 02", value: 24 },
      { label: "May 10", value: 21 },
      { label: "May 18", value: 28 },
      { label: "May 26", value: 25 },
      { label: "Jun 03", value: 31 },
      { label: "Jun 11", value: 29 },
      { label: "Jun 19", value: 34 },
      { label: "Jun 27", value: 32 }
    ]
  },

  linkedBanks: [
    { id: 101, label: "Citi Bank", amount: 350000, meta: "Updated 1 hour ago" },
    { id: 102, label: "HSBC Bank", amount: 98000, meta: "Updated 2 hours ago" },
    { id: 103, label: "Axis Bank", amount: 143500, meta: "Updated 25 mins ago" }
  ],

  vaults: [
    { id: 201, label: "Primary Vault", amount: 22000, meta: "Main reserve" },
    { id: 202, label: "Travel Vault", amount: 8600, meta: "Trips and bookings" },
    { id: 203, label: "Savings Vault", amount: 30640, meta: "Long-term reserve" }
  ],

  activityLog: [
    {
      id: 1,
      category: "credit",
      title: "Freelance Payment",
      amount: 4200,
      currency: "USD",
      timestamp: "March 15, 2026, 10:20 AM",
      state: "Completed"
    },
    {
      id: 2,
      category: "debit",
      title: "Monthly Rent",
      amount: 1600,
      currency: "USD",
      timestamp: "March 14, 2026, 09:10 AM",
      state: "Completed"
    },
    {
      id: 3,
      category: "credit",
      title: "Wallet Top-up",
      amount: 2500,
      currency: "USD",
      timestamp: "March 13, 2026, 07:40 PM",
      state: "Completed"
    },
    {
      id: 4,
      category: "debit",
      title: "Team Dinner",
      amount: 185,
      currency: "USD",
      timestamp: "March 12, 2026, 08:15 PM",
      state: "Pending"
    }
  ]
};