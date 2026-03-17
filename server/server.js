import express from "express";
import cors from "cors";

import overviewRoutes from "./routes/overviewRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wallet Dashboard V2 API is live");
});

app.use("/api/overview", overviewRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/accounts", accountRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});