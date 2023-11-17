import express from "express";
import session from "express-session";
import cookies from "cookie-parser";
import logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";

import passport from "./services/passport";
import { SecretsDependency } from "./app";

import router from "./router";
import { listUsers } from "./store/user";

const app = express();

app.use(express.json());
app.use(
  session({
    name: "__session",
    secret: "H7gFSP5aQ&8xN#CL",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookies());

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

app.use("/api", router);
app.use("/**", (r, res) => {
  logger.info("Hit 404, redirecting to home");
  res.redirect("/");
});

export default {
  api: onRequest({ secrets: SecretsDependency }, app),
};
