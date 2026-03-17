import express from "express";
import { addBank } from "../controllers/accountController.js";

const router = express.Router();

router.post("/bank", addBank);

export default router;