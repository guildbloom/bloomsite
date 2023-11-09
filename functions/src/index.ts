import express, { Router } from "express";
import session from "express-session";
import logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

import passport from "./passport";
import {
  DISCORD_CALLBACK_URL,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
} from "./config";
import { listUsers } from "./store";

setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(express.json());
app.use(
  session({
    secret: "H7gFSP5aQ&8xN#CL",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const router = Router();

router.get("/ping", (r, res) => {
  res.send("Pong");
});

router.get("/pong", (r, res) => {
  res.send("Ping!");
});

router.get("/users", async (r, res) => {
  const users = await listUsers();
  res.json(users);
});

router.get("/auth/discord", passport.authenticate("discord"));
router.get(
  "/auth/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "/",
  }),
  async function (req, res) {
    res.redirect("/"); // Successful auth
  }
);

app.use("/login", router);
app.use("/**", (r, res) => {
  logger.info("Hit 404, redirecting to home");
  res.redirect("/");
});

export default {
  login: onRequest(
    {
      secrets: [DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_CALLBACK_URL],
    },
    app
  ),
};
