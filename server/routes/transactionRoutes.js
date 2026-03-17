import express from "express";
import {
  addMoney,
  cashOut,
  getActivity,
  deleteActivity
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getActivity);
router.post("/add-money", addMoney);
router.post("/cash-out", cashOut);
router.delete("/:id", deleteActivity);

export default router;