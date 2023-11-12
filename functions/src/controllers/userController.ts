import { Router } from "express";

const router = Router();

router.get("/user/profile", async (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "No" });
    return;
  }
  const { profile, firebaseToken } = req.user;

  res.json(profile);
});

export default router;
