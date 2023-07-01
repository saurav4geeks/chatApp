import express from "express";
import { authenticate } from "../controllers/auth.js";
const router = express.Router();
router.post("/authenticate", authenticate);

export default router;