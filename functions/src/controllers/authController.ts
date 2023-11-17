import { Router } from "express";

import passport from "../services/passport";
import { logger } from "firebase-functions/v1";

const router = Router();

router.get("/auth/discord", passport.authenticate("discord"));

router.get("/auth/discord/callback", (req, res, next) => {
  passport.authenticate("discord", (err, user, info) => {
    if (err) {
      logger.error(err?.message);
      return res.redirect("/?type=error");
    }
    if (!user) {
      return res.redirect("/?type=error");
    }
    logger.info(info);
    req.logIn(user, (err) => {
      if (err) {
        logger.error(err?.message);
        return res.redirect("/?type=error");
      }
      return res.redirect("/app");
    });
  })(req, res, next);
});

router.get("/auth/logout", (req, res) => {
  res.clearCookie("_session");
  req.logOut({}, () => {
    res.redirect("/");
  });
});

router.get("/auth/status", (req, res) => {
  res.json(req.isAuthenticated());
});

export default router;
