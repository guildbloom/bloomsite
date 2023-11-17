import { Router } from "express";
import { trackWaitlist } from "../store/waitlist";

const router = Router();

router.post("/waitlist/add", async (req, res) => {
  const { discordId } = req.body;
  if (req.cookies["waitlist"]) {
    res.status(401).json(false);
    return;
  }
  await trackWaitlist({ id: discordId });
  res.cookie("waitlist", "added", { sameSite: true });
  res.json(true);
});

export default router;
