import { Router } from "express";
import { paginateCollection } from "../middleware/paginateCollection";
import { sendDM } from "../services/bot";

const router = Router();

router.get("/funding/test", async (req, res) => {
  const { profile } = req.user;
  const done = await sendDM(
    profile.id,
    "YOOO, this is a test test from bot bot"
  );
  res.status(done ? 400 : 200).json(done);
});

export default router;
